angular
  .module('kkangst')
  .directive('pageHeader', pageHeader)

function pageHeader () {
  return {
    restrict: 'EA',
    scope: {
      content : '=content'
    },
    templateUrl: '../html/directives/pageHeader/pageHeader.template.html'
  }
}
