const gulp = require('gulp')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')


const config = require('./gulp-config.json')


gulp.task('js-app-concat', [ 'clean' ], () => {
  return gulp.src(config.paths.appjs)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.publicjs))
})

gulp.task('js-app-uglify', [ 'js-app-concat' ], () => {
  return gulp.src(config.paths.appjs)
    .pipe(plumber())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.publicjs))
})
