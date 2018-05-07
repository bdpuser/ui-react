import { uid } from "../../utils/uid";

export default class PostMessage {
  constructor(opts = {}) {
    this.id = opts.id || uid();
    this.cmd = opts.cmd || this.cmd;
    this.body = opts.body || this.body;
    this.legacy = opts.legacy || this.legacy;
    this.response = opts.response || this.response;
    this.window = window;
  }

  /**
   * Parse content coming from a PostMessage, always return an obj,
   * event when the content is not valid JSON.
   *
   * Support legacy RUBICON_ messages from 2014-2016.
   * @TODO: Remove legacy support after sunset period.
   *
   * @param {String} str
   * @returns {IPostMessageContent}
   */
  static parse(str) {
    let legacy = false;

    if (str.substr(0, 8) === "RUBICON_") {
      str = str.slice(8);
      legacy = true;
    }

    try {
      let msg = JSON.parse(str);
      if (legacy) {
        return {
          id: uid(),
          cmd: msg.type,
          body: msg.params,
          legacy: legacy
        };
      }
      return msg;
    } catch (e) {
      return {
        id: "",
        cmd: "",
        body: "",
        legacy: legacy
      };
    }
  }
  /**
   * Change the window context that this PostMessage will be sent FROM.
   * This is necessary for being able to mock the window object during tests.
   *
   * Support legacy RUBICON_ messages from 2014-2016.
   * @TODO: Remove legacy support after sunset period.
   *
   * @param {} context
   */
  setContext(context) {
    this.window = context;
  }

  sendTo(frame, origin) {
    let msg = "";

    if (this.legacy) {
      msg =
        "RUBICON_" +
        JSON.stringify({
          type: this.cmd,
          params: this.body
        });
    } else {
      msg = JSON.stringify({
        id: this.id,
        cmd: this.cmd,
        body: this.body,
        response: this.response
      });
    }

    try {
      frame.postMessage(msg, origin);
    } catch (e) {
      console.error(e);
    }
    return {
      /**
       * Register a "fire-once" callback to catch this message response.
       *
       * @param {Function} callback
       * @param {Number} [timeout]
       * @returns {Function} unregister function
       */
      onResponse: (callback, timeout) => {
        let timerId;
        let content;
        let listener = event => {
          if (typeof event.data === "string" && event.source === frame) {
            content = PostMessage.parse(event.data);
            let isResponse = content.cmd === "response";
            let isForMe = content.id === this.id;
            if (isResponse && isForMe) {
              callback(content.body, content);
              removeListener();
            }
          }
        };

        let removeListener = () => {
          this.window.removeEventListener("message", listener);
          clearTimeout(timerId);
        };

        if (timeout >= 0) {
          timerId = window.setTimeout(removeListener, timeout);
        }

        this.window.addEventListener("message", listener, false);

        return removeListener;
      }
    };
  }
}
