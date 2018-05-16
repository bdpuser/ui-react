const EventManager = {
  eventList: new Map(),

  on(event, callback) {
    this.eventList.has(event) || this.eventList.set(event, []);

    this.eventList.get(event).push(callback);

    return this;
  },

  off(event) {
    return this.eventList.delete(event);
  },

  emit(event, ...args) {
    if (!this.eventList.has(event)) {
      return false;
    }
    this.eventList
      .get(event)
      .forEach(callback => setTimeout(() => callback.call(this, ...args), 0));

    return true;
  }
};

export default EventManager;
