const gulp = require('gulp')
const gutil = require('gulp-util')

const config = require('./gulp-config.json')


gulp.task('watch-js', [ 'js-app-uglify' ], () => {
  gulp.watch(config.paths.appjs, ['js-app-uglify'])
})

gulp.task('watch-less', [ 'less' ], () => {
  gulp.watch(config.paths.appless, ['less'])
})

gulp.task('w', [ 'watch-less', 'watch-js' ], () => {
  return gutil.log('running gulp watch on less & js. vendor from CDNs')
})
