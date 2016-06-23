angular.module('kkangst')
  .controller('AppCtrl', [ '$scope', '$state',
    function ($scope, $state) {
      $scope.app = {
        settings: {
          htmlClass: '',
          bodyClass: ''
        }
      }
      $scope.$state = $state
    }])
