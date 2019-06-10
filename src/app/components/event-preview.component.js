import './event-preview.module'

class EventPreviewCtrl {
  constructor($scope) {
    this.testData = 'eventPreview::testData'
    this.openDetails = (nnn) => {
      console.log('eventPreview::openDetails()')
      $scope.$emit('openEventDetails', nnn)
    }
    console.log('EventPreviewCtrl::controller()')
  }
}
const eventPreview = {
  bindings: { event: '<' },
  template: require('./event-preview.html'),
  controller: EventPreviewCtrl
}

angular.module('eventPreview').component('eventPreview', eventPreview)