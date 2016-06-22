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

angular.module('kkangst')
  .controller('AppCtrl', [ '$scope', '$state',
    function ($scope, $state) {
      $scope.app = {
        settings: {
          htmlClass: '',
          bodyClass: ''
        }
      }
      $scope.$state = $state
    }])

angular.module('kkangst')
  .run([ '$rootScope', '$state', '$stateParams',
         function ($rootScope, $state, $stateParams) {
           $rootScope.$state = $state
           $rootScope.$stateParams = $stateParams
         }
       ])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/website/home.html'
      })
      // $locationProvider.html5Mode(true)
  }])

$('#addReview').submit(function (e) {
  $('.alert.alert-danger').hide()
  if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
    if ($('.alert.alert-danger').length) {
      $('.alert.alert-danger').show()
    } else {
      $(this).prepend('<div role="alert" class="alert alert-danger">All fields required. Validated by jQuery</div>')
    }
    return false
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW4uanMiLCJjb25maWcucm91dGVyLmpzIiwidmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUoJ2trYW5nc3QnLCBbXG4gICduZ1JvdXRlJyxcbiAgJ25nUmVzb3VyY2UnLFxuICAnbmdTYW5pdGl6ZScsXG4gICduZ1RvdWNoJyxcbiAgJ3VpLnJvdXRlcidcbl0pXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgna2thbmdzdCcpXG4gIC5jb25maWcoXG4gICAgWyckY29udHJvbGxlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGZpbHRlclByb3ZpZGVyJywgJyRwcm92aWRlJywgJyRpbnRlcnBvbGF0ZVByb3ZpZGVyJyxcbiAgICAgIGZ1bmN0aW9uKCRjb250cm9sbGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRmaWx0ZXJQcm92aWRlciwgJHByb3ZpZGUsICRpbnRlcnBvbGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgIGFwcC5jb250cm9sbGVyID0gJGNvbnRyb2xsZXJQcm92aWRlci5yZWdpc3RlclxuICAgICAgICBhcHAuZGlyZWN0aXZlID0gJGNvbXBpbGVQcm92aWRlci5kaXJlY3RpdmVcbiAgICAgICAgYXBwLmZpbHRlciA9ICRmaWx0ZXJQcm92aWRlci5yZWdpc3RlclxuICAgICAgICBhcHAuZmFjdG9yeSA9ICRwcm92aWRlLmZhY3RvcnlcbiAgICAgICAgYXBwLnNlcnZpY2UgPSAkcHJvdmlkZS5zZXJ2aWNlXG4gICAgICAgIGFwcC5jb25zdGFudCA9ICRwcm92aWRlLmNvbnN0YW50XG4gICAgICAgIGFwcC52YWx1ZSA9ICRwcm92aWRlLnZhbHVlXG5cbiAgICAgICAgJGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJzo6JylcbiAgICAgICAgJGludGVycG9sYXRlUHJvdmlkZXIuZW5kU3ltYm9sKCc6OicpXG5cbiAgICAgIH1cbiAgICBdXG4gIClcblxuYXBwLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgW2Z1bmN0aW9uKCkge1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICB2bS50aXRsZSA9IFwiVGl0dWx1c1wiXG4gIH1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2trYW5nc3QnKVxuICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsgJyRzY29wZScsICckc3RhdGUnLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSkge1xuICAgICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBodG1sQ2xhc3M6ICcnLFxuICAgICAgICAgIGJvZHlDbGFzczogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLiRzdGF0ZSA9ICRzdGF0ZVxuICAgIH1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2trYW5nc3QnKVxuICAucnVuKFsgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXG4gICAgICAgICBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGVcbiAgICAgICAgICAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXNcbiAgICAgICAgIH1cbiAgICAgICBdKVxuXG4gIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvd2Vic2l0ZS9ob21lLmh0bWwnXG4gICAgICB9KVxuICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXG4gIH1dKVxuIiwiJCgnI2FkZFJldmlldycpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuICAkKCcuYWxlcnQuYWxlcnQtZGFuZ2VyJykuaGlkZSgpXG4gIGlmICghJCgnaW5wdXQjbmFtZScpLnZhbCgpIHx8ICEkKCdzZWxlY3QjcmF0aW5nJykudmFsKCkgfHwgISQoJ3RleHRhcmVhI3JldmlldycpLnZhbCgpKSB7XG4gICAgaWYgKCQoJy5hbGVydC5hbGVydC1kYW5nZXInKS5sZW5ndGgpIHtcbiAgICAgICQoJy5hbGVydC5hbGVydC1kYW5nZXInKS5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5wcmVwZW5kKCc8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+QWxsIGZpZWxkcyByZXF1aXJlZC4gVmFsaWRhdGVkIGJ5IGpRdWVyeTwvZGl2PicpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
