const gulp = require('gulp')
const gutil = require('gulp-util')

gulp.task('default', [ 'less', 'js-app-uglify' ], () => {
  return gutil.log('With app & vendor from CDNs')
})
