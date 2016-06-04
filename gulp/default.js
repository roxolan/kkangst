const gulp = require('gulp')
const gutil = require('gulp-util')

gulp.task('default', [ 'less', 'js-app-uglify', 'swigtest' ], () => {
  return gutil.log('With swig')
})
