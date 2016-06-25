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
  .directive('ratingStars', ratingStars)

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZhbGlkYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnJhbmQgbmV3IGFuZ3VsYXIgYXBwXG4ndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUoJ2trYW5nc3QnLCBbXSlcblxudmFyIF9pc051bWVyaWMgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pXG59XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHZhciBudW1EaXN0YW5jZSwgdW5pdFxuICAgIGlmIChkaXN0YW5jZSAmJiBfaXNOdW1lcmljKGRpc3RhbmNlKSkge1xuICAgICAgaWYgKGRpc3RhbmNlID4gMSkge1xuICAgICAgICBudW1EaXN0YW5jZSA9IHBhcnNlRmxvYXQoZGlzdGFuY2UpLnRvRml4ZWQoMSlcbiAgICAgICAgdW5pdCA9ICdrbSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bURpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2UgKiAxMDAwLCAxMClcbiAgICAgICAgdW5pdCA9ICdtJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bURpc3RhbmNlICsgdW5pdFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJz8nXG4gICAgfVxuICB9XG59XG5cbnZhciByYXRpbmdTdGFycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgdGhpc1JhdGluZzogJz1yYXRpbmcnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogJy4uL2h0bWwvdGVtcGxhdGVzL3JhdGluZy1zdGFycy5odG1sJ1xuICB9XG59XG5cbnZhciBtYWluQ3RybCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZtID0gdGhpc1xuICB2bS5hdXRob3IgPSAn0JLRltGC0Y8g0JrQvtGC0YPRgdC10L3QutC+J1xuICB2bS55ZWFyID0gMTk3NFxufVxuXG52YXIgY291cnNlTGlzdEN0cmwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2bSA9IHRoaXNcbiAgdm0uY291cnNlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAn0JzQsNGA0LrQtdGC0LjQvdCzJyxcbiAgICAgIGFkZHJlc3M6ICfQmtC40ZfQsiwg0LLRg9C7LiDQktC+0LvQvtGB0YzQutCwLCA4LzUsINC60L7RgNC/LjQnLFxuICAgICAgcmF0aW5nOiA0LFxuICAgICAgZ3JvdXBzOiBbJ1BNQkEnLCAnRU1CQScsICdFTUJBKEFncm8pJ10sXG4gICAgICBkaXN0YW5jZTogJzAuMjk2NDU2JyxcbiAgICAgIF9pZDogJzU3NTk3MTljMjE2Njk1YTU2M2E2NDBlNCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICfQodGC0YDQsNGC0LXQs9GW0YfQvdCwINGW0LTQtdGPJyxcbiAgICAgIGFkZHJlc3M6ICfQmtC40ZfQsiwg0LLRg9C7LiDQktC+0LvQvtGB0YzQutCwLCA4LzUsINC60L7RgNC/LjQnLFxuICAgICAgcmF0aW5nOiA1LFxuICAgICAgZ3JvdXBzOiBbJ1BNQkEnLCAnRU1CQScsICdFTUJBKEFncm8pJ10sXG4gICAgICBkaXN0YW5jZTogJzAuNzgnLFxuICAgICAgX2lkOiAnNTc2MTIwODhhOWJiYTMxMDQzNDZkYzg0J1xuICAgIH1cbiAgXVxufVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2trYW5nc3QnKVxuICAuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ3RybClcbiAgLmNvbnRyb2xsZXIoJ2NvdXJzZUxpc3RDdHJsJywgY291cnNlTGlzdEN0cmwpXG4gIC5maWx0ZXIoJ2Zvcm1hdERpc3RhbmNlJywgZm9ybWF0RGlzdGFuY2UpXG4gIC5kaXJlY3RpdmUoJ3JhdGluZ1N0YXJzJywgcmF0aW5nU3RhcnMpXG4iLCIkKCcjYWRkUmV2aWV3Jykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICQoJy5hbGVydC5hbGVydC1kYW5nZXInKS5oaWRlKClcbiAgaWYgKCEkKCdpbnB1dCNuYW1lJykudmFsKCkgfHwgISQoJ3NlbGVjdCNyYXRpbmcnKS52YWwoKSB8fCAhJCgndGV4dGFyZWEjcmV2aWV3JykudmFsKCkpIHtcbiAgICBpZiAoJCgnLmFsZXJ0LmFsZXJ0LWRhbmdlcicpLmxlbmd0aCkge1xuICAgICAgJCgnLmFsZXJ0LmFsZXJ0LWRhbmdlcicpLnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnByZXBlbmQoJzxkaXYgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5BbGwgZmllbGRzIHJlcXVpcmVkLiBWYWxpZGF0ZWQgYnkgalF1ZXJ5PC9kaXY+JylcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
