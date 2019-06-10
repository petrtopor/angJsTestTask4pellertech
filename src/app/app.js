import angular from 'angular'
// import uiRouter from 'uirouter'
import '@uirouter/angularjs'

import './test/test.component'
import './views/events-list/events-list.component'
import './views/event/event.component'

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope, $state, $location) {
    this.url = 'https://github.com/preboot/angular-webpack'
    $scope.$on('openEventDetails', (event, data) => {
      console.log('need to switch a state now!!!!; data === ', data)
      // $state.go('^')
      // $location.path('/event/2026')
      $location.path('/event/' + data)
    })
  }
}

const MODULE_NAME = 'app';

let appModule = angular.module(MODULE_NAME, ['testModule', 'eventsList', 'event', 'ui.router', 'eventsModule'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

appModule.config($stateProvider => {
  [
    {
      name: 'events',
      url: '/events',
      component: 'eventsList',
      resolve: {
        events: eventsService => eventsService.allEvents
      }
    },
    {
      // parent: 'events',
      name: 'event',
      url: '/event/{eventId}',
      component: 'event',
      resolve: {
        eventItem: (eventsService, $stateParams) => eventsService.getEvent(parseInt($stateParams.eventId))
      }
    }
  ].map(state => $stateProvider.state(state))
})

export default MODULE_NAME;