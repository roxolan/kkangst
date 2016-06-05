'use strict'

angular.module('kkangst', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router'
])

var app = angular.module('kkangst')
  .config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
      function($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
        app.controller = $controllerProvider.register
        app.directive = $compileProvider.directive
        app.filter = $filterProvider.register
        app.factory = $provide.factory
        app.service = $provide.service
        app.constant = $provide.constant
        app.value = $provide.value

        $interpolateProvider.startSymbol('::')
        $interpolateProvider.endSymbol('::')

      }
    ]
  )

app.controller('MainCtrl', [function() {
    var vm = this
    vm.title = "Titulus"
  }])
