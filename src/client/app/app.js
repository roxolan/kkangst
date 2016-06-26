// brand new angular app
'use strict'

angular.module('kkangst', [])

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

var formatDistance = function () {
  return function (distance) {
    var numDistance, unit
    if (distance && _isNumeric(distance)) {
      if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1)
        unit = 'km'
      } else {
        numDistance = parseInt(distance * 1000, 10)
        unit = 'm'
      }
      return numDistance + unit
    } else {
      return '?'
    }
  }
}

var ratingStars = function () {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '../html/templates/rating-stars.html'
  }
}

var mainCtrl = function () {
  var vm = this
  vm.author = 'Вітя Котусенко'
  vm.year = 1974
}

var courseListCtrl = function (kkangstData) {
  var vm = this
  vm.message = 'Шукаємо курси...'
  kkangstData
    .success(function (data) {
      vm.message = data.length > 0 ? '' : 'Курсів не знайдено'
      vm.courses = data
    })
    .error(function (e) {
      vm.message = 'Вибачте, щось пішло не так'
      console.log(e)
    })
}

var kkangstData = function ($http) {
  return $http.get('/api/courses')
}

angular
  .module('kkangst')
  .controller('mainCtrl', mainCtrl)
  .controller('courseListCtrl', courseListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('kkangstData', kkangstData)
