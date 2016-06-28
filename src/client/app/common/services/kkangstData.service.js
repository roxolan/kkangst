angular
  .module('kkangst')
  .service('kkangstData', kkangstData)

kkangstData.$inject = ['$http']
function kkangstData ($http) {
  var getCourses = function () {
    return $http.get('/api/courses')
  }

  var courseById = function (courseid) {
    return $http.get('/api/courses/' + courseid)
  }

  return {
    getCourses: getCourses,
    courseById: courseById
  }
}
