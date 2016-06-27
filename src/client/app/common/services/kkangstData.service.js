angular
  .module('kkangst')
  .service('kkangstData', kkangstData)

function kkangstData ($http) {
  this.getCourses = function () {
    return $http.get('/api/courses')
  }
}
