angular
  .module('kkangst')
  .directive('navigation', navigation)

function navigation () {
  return {
    restrict: 'EA',
    templateUrl: '../html/directives/navigation/navigation.template.html'
  }
}
