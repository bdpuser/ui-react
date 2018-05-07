import { PostMessage } from "../PostMessage";
import { destroyObject } from "../../utils/destroy";
import { EventHandler } from "../../utils/eventHandler";

export default class MessageBus {
  constructor(frame = window.parent, self = window) {
    this.frame = frame;
    this.handlers = {};
    this.allowedOrigin = "*";
    self.addEventListener("message", this.messageHandler, false);
  }
  /**
   * Whitelist messages from a specific origin.
   *
   * @param {String} origin
   */
  allowOrigin(origin) {
    this.allowedOrigin = origin;
  }

  /**
   * Private handler for the Post Messages coming to this window.
   *
   * @param {MessageEvent} event
   */
  messageHandler(event) {
    if (typeof event.data === "string" && event.source === this.frame) {
      let msg = PostMessage.parse(event.data);
      this.trigger(msg.cmd, msg);
    }
  }

  /**
   * Send a PostMessage to the frame.
   *
   * @param {String} cmd
   * @param {Any} body
   * @param {IPostMessageOptions} [opts]
   * @returns {IPostMessageSent}
   */
  send(cmd, body = "", opts) {
    opts = opts || {};
    opts.cmd = cmd;
    opts.body = body;
    let msg = new PostMessage(opts);
    return msg.sendTo(this.frame, this.allowedOrigin);
  }

  /**
   * Trigger all of the callbacks for a given command.
   *
   * @param {String} cmd
   * @param {IPostMessageOptions} [opts]
   */
  trigger(cmd, opts) {
    let handler = this.handlers[cmd];
    if (handler) {
      handler.trigger(opts.body, opts);
    }
  }

  /**
   * Destroy all event handlers (remove their callbacks) and remove the "global"
   * window listener for post messages. This instance will no longer receive any
   * messages or trigger any events after this.
   */
  destroy() {
    try {
      this.self.removeEventListener("message", this.messageHandler);
      destroyObject(this.handlers);
      destroyObject(this);
    } catch (e) {
      // Swallowing errors during destruction, usually just IE complaining
      // about something or other. No big deal, keep calm and carry on.
    }
  }

  /**
   * Create an EventHandler for a given command.  You can register an optional
   * callback function that will be fired when a message is received with the
   * given command. The returned event object contains utilities to handle the
   * incoming messages.
   *
   * let event = bus.on('foo').respondWith('bar');
   *
   * @param {String} cmd
   * @param {Function} [callbackFn]
   * @returns {IOnMessageEvent}
   */
  on(cmd, callbackFn) {
    let unregisterFns = [];
    let handler = this.handlers[cmd] || new EventHandler();
    this.handlers[cmd] = handler;
    if (callbackFn) {
      unregisterFns.push(handler.register(callbackFn));
    }

    let destroy = () => {
      this.handlers[cmd].destroy();
      unregisterFns.forEach(unregister => {
        unregister();
      });
      return event;
    };

    let respondWith = response => {
      let unregister = handler.register((body, incomingMsg) => {
        let result;
        let message;
        // Start building the response PostMessage content.
        // Notice the outgoing message id is the same as the
        // incomingMsg id and the body is 'response'. This is
        // what it takes to send a response message.
        let content = {
          legacy: incomingMsg.legacy,
          response: incomingMsg.cmd,
          id: incomingMsg.id,
          cmd: "response",
          body: ""
        };

        if (typeof response === "function") {
          result = response(body, incomingMsg);
        } else {
          result = response;
        }

        if (result && result.then) {
          // Result of the response handler is a promise,
          // so when the promise resolves, send off the
          // response PostMessage to the frame.
          result.then(answer => {
            content.body = answer;
            message = new PostMessage(content);
            message.sendTo(this.frame);
          });
        } else {
          // Result of the response handler is not a promise
          // so send the result of the function as the body
          // of the PostMessage.
          content.body = result;
          message = new PostMessage(content);
          message.sendTo(this.frame, this.allowedOrigin);
        }
      });

      unregisterFns.push(unregister);
      return event;
    };

    /**
     * Define the event object that is returned from on() and it's
     * chainable methods destroy() and respondWith().
     */
    let event = {
      handler: handler,
      destroy: destroy,
      respondWith: respondWith
    };

    return event;
  }

  once(cmd, callbackFn) {
    let event = this.on(cmd, function() {
      callbackFn.apply(this, arguments);
      event.destroy();
    });
    return event;
  }
}
