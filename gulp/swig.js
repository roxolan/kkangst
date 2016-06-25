const gulp = require('gulp')
const swig = require('gulp-swig')

const config = require('./gulp-config.json')

gulp.task('html-pure', [ 'clean' ], () => {
  return gulp.src(config.paths.apphtml)
    .pipe(gulp.dest('public/html'))
})


gulp.task('swig', [ 'clean' ], () => {
  return gulp.src(config.paths.appswig)
    .pipe(swig())
    .pipe(gulp.dest('public/html'))
})
