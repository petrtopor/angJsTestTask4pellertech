import './event.module'

class EventCtrl {
  constructor() {
    this.testData = 'Event::testData'
    console.log('Event::controller()')
  }
}
const event = {
  bindings: { eventItem: '<' },
  template: require('./event.html'),
  controller: EventCtrl
}
angular.module('event').component('event', event)