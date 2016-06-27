// brand new angular app
'use strict'

angular.module('kkangst', ['ngRoute'])

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'})
  $locationProvider.html5Mode(true)
}

var mainCtrl = function () {
  var vm = this
  vm.author = 'Вітя Котусенко'
  vm.year = 1974
}

angular
  .module('kkangst')
  .config(['$routeProvider', '$locationProvider', config])
  .controller('mainCtrl', mainCtrl)
