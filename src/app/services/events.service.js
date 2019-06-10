import './events.module'

angular.module('eventsModule').service('eventsService', function($resource) {
  // this.allEvents = new Promise((resolve, reject) => resolve(['0', '1', '2']))
  // var events = $resource('http://localhost:80/events-list').get().$promise.then((smth) => console.log('Smth happened:\n', smth))
  this.allEvents = $resource('http://localhost:80/events-list').get().$promise.then(smth => smth.eventsList)
  this.getEvent = (eventId) => $resource('http://localhost:80/events-list').get().$promise.then(smth => smth.eventsList.find(event => event.id === eventId))
})