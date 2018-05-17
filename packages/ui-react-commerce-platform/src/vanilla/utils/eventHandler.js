export class EventHandler {
  constructor() {
    this.callbacks = [];
  }
  /**
   * Register a callback function.
   *
   * @param callback
   * @returns {Function} unregister function
   */
  register(callback) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter(item => {
        return item !== callback;
      });
    };
  }

  /**
   * Trigger all registered callback functions. Arguments provided
   * to trigger are passed to the callbacks.
   */
  trigger(...args) {
    this.callbacks.forEach(callback => {
      callback.apply(this, args);
    });
  }

  /**
   * Remove all registered callbacks.
   */
  destroy() {
    this.callbacks.length = 0;
  }
}
