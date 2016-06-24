// brand new angular app
'use strict'

angular.module('kkangst', [])

var mainCtrl = function () {
  var vm = this
  vm.author = 'Вітя Котусенко'
  vm.year = 1974
}

angular
  .module('kkangst')
  .controller('courseListCtrl', function () {
    var vm = this
    vm.courses = [
      {
        name: 'Маркетинг',
        address: 'Київ, вул. Волоська, 8/5, корп.4',
        rating: 4,
        groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
        distance: '350m',
        _id: '5759719c216695a563a640e4'
      },
      {
        name: 'Стратегічна ідея',
        address: 'Київ, вул. Волоська, 8/5, корп.4',
        rating: 5,
        groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
        distance: '350m',
        _id: '57612088a9bba3104346dc84'
      }
    ]
  })
