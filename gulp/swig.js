const gulp = require('gulp')
const swig = require('gulp-swig')

const config = require('./gulp-config.json')

gulp.task('swigtest', () => {
  return gulp.src(config.paths.appswig)
    .pipe(swig())
    .pipe(gulp.dest('public/html'))
})
