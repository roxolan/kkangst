// File: chapter3/controller.js

angular.module('kkangst', [])
  .controller('MainCtrl', [function() {
    var vm = this
    vm.items = [
      {id: 1, label: 'First', done: false},
      {id: 2, label: 'Second', done: false}
    ]

    vm.getDoneClass = function(item) {
      return {
        finished: item.done,
        unfinished: !item.done
      }
    }

    vm.change = function() {
      vm.username = 'changed'
      vm.password = 'password'
    }

    vm.submit = function() {
      console.log('User clicked submit with ',
        vm.user)
    }


  }]);
