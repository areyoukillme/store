export default class PubSub {
  constructor() {
    this.events = {};
  }

  //  提供订阅功能
  subscribe(event, callback) {
    let self = this;
    
      if(!self.events.hasOwnProperty(event)) {  
        self.events[event] = [];
      }
      // 没有做去重
      self.events[event].push(callback);
  }

  // 提供发布功能
  publish(event, data = {}) {
    let self = this;
    if(!self.events.hasOwnProperty(event)) {
      return [];
    }
    // 回调队列全部执行
    self.events[event].forEach(callback => callback(data));
  }
}
