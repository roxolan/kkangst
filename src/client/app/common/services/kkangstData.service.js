angular
  .module('kkangst')
  .service('kkangstData', kkangstData)

kkangstData.$inject = ['$hhtp']
function kkangstData ($http) {
  this.getCourses = function () {
    return $http.get('/api/courses')
  }
}
