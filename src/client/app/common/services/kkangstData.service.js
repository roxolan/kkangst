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

  var addReviewById = function (courseid, reviewData) {
    return $http.post('/api/courses/' + courseid + '/reviews', reviewData)
  }

  return {
    getCourses: getCourses,
    courseById: courseById,
    addReviewById: addReviewById
  }
}
