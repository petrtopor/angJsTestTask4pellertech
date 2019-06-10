import './events.module'
const serverAddress = 'http://35.239.197.19/events-list'
// const serverAddress = 'http://localhost:80/events-list'

angular.module('eventsModule').service('eventsService', function($resource) {
  // this.allEvents = new Promise((resolve, reject) => resolve(['0', '1', '2']))
  // var events = $resource('http://localhost:80/events-list').get().$promise.then((smth) => console.log('Smth happened:\n', smth))
  // this.allEvents = $resource('http://localhost:80/events-list').get().$promise.then(smth => smth.eventsList)
  // this.getEvent = (eventId) => $resource('http://localhost:80/events-list').get().$promise.then(smth => smth.eventsList.find(event => event.id === eventId))
  this.allEvents = $resource(serverAddress).get().$promise.then(smth => smth.eventsList)
  this.getEvent = (eventId) => $resource(serverAddress).get().$promise.then(smth => smth.eventsList.find(event => event.id === eventId))
})