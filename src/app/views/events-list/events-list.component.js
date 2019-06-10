import './events-list.module'

class EventsListCtrl {
  constructor($scope) {
    this.testData = 'EventsList::testData'
    console.log('EventsListCtrl::controller()')
    // $scope.$on('openEventDetails', (event, data) => $scope.$emit('openEventDetails', data))
  }
}
const eventsList = {
  bindings: { events: '<' },
  template: require('./events-list.html'),
  controller: EventsListCtrl
}
angular.module('eventsList').component('eventsList', eventsList)