angular
  .module('kkangst')
  .directive('ratingStars', ratingStars)

function ratingStars () {
  console.log('ratingStars is called')
  return {
    restrict: 'EA',
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '../html/directives/ratingStars/ratingStars.template.html'
  }
}
