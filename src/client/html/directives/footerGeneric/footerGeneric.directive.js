angular
  .module('kkangst')
  .directive('footerGeneric', footerGeneric)

function footerGeneric () {
  return {
    restrict: 'EA',
    templateUrl: '../html/directives/footerGeneric/footerGeneric.template.html'
  }
}
