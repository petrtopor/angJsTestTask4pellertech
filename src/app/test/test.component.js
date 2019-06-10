import './test.module'

const MODULE_NAME = 'testModule'

class TestCtrl {
  constructor($scope, EventsService) {
    EventsService.allEvents.then(payload => {
      this.testData = payload
      console.log('this.testData:\t', this.testData)
      // $scope.$apply()
      $scope.$digest()
    })
  }
}
const test = {
  template: require('./test.html'),
  /*
  controller: async function($scope, EventsService) {
    let payload = await EventsService.allEvents
    this.testData = 'pizdopidor';
    console.log('testComponent::controller()\t', payload)
    console.log('this.testData:\t', this.testData)
    $scope.$digest()
  }
  */
  
  controller: TestCtrl
  
}
angular.module(MODULE_NAME).component('testComponent', test)

export default MODULE_NAME