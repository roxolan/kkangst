angular
  .module('kkangst')
  .directive('ratingStars', ratingStars)

function ratingStars () {
  return {
    restrict: 'EA',
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '../html/directives/ratingStars/ratingStars.template.html'
  }
}
