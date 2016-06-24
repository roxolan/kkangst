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

var mainCtrl = function () {
  var vm = this
  vm.author = 'Вітя Котусенко'
  vm.year = 1974
}

var courseListCtrl = function () {
  var vm = this
  vm.courses = [
    {
      name: 'Маркетинг',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 4,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      distance: '0.296456',
      _id: '5759719c216695a563a640e4'
    },
    {
      name: 'Стратегічна ідея',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 5,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      distance: '0.78',
      _id: '57612088a9bba3104346dc84'
    }
  ]
}

angular
  .module('kkangst')
  .controller('mainCtrl', mainCtrl)
  .controller('courseListCtrl', courseListCtrl)
  .filter('formatDistance', formatDistance)
