const gulp = require('gulp')
const gutil = require('gulp-util')

gulp.task('default', [ 'amelia-copy', 'less', 'js-app-uglify', 'swig' ], () => {
  return gutil.log('With swig')
})
