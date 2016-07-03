angular
  .module('kkangst')
  .service('kkangstData', kkangstData)

kkangstData.$inject = ['$http']
function kkangstData ($http) {
  const getCourses = function () {
    return $http.get('/api/courses')
  }

  const courseById = function (courseid) {
    return $http.get('/api/courses/' + courseid)
  }

  const addReviewById = function (courseid, reviewData) {
    return $http.post('/api/courses/' + courseid + '/reviews', reviewData)
  }

  return {
    getCourses: getCourses,
    courseById: courseById,
    addReviewById: addReviewById
  }
}
