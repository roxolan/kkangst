const gulp = require('gulp')
const gutil = require('gulp-util')

const config = require('./gulp-config.json')

gulp.task('watch-js', [ 'js-app-uglify' ], () => {
  gulp.watch(config.paths.appjs, ['js-app-uglify'])
})

gulp.task('watch-less', [ 'less' ], () => {
  gulp.watch(config.paths.appless, ['less'])
})

gulp.task('watch-swig', [ 'swig' ], () => {
  gulp.watch(config.paths.appswig, ['swigtest'])
})

gulp.task('w', [ 'watch-less', 'watch-js', 'watch-swig' ], () => {
  return gutil.log('running gulp watch on js, less & swigTEST')
})
