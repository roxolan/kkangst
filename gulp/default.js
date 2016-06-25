const gulp = require('gulp')
const gutil = require('gulp-util')

gulp.task('default', [ 'vendor', 'less', 'js-app-uglify', 'swig', 'html-pure' ], () => {
  return gutil.log('With swig')
})
