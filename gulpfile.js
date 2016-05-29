const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')

const config = require('./gulp-config.json')

const clean = require('gulp-clean')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

gulp.task('clean', () => {
  return gulp.src(config.paths.publicall)
    .pipe(clean({force: true}))
})

gulp.task('less', [ 'clean' ], () => {
  return gulp.src(config.paths.appless)
    .pipe(less({
      paths: config.paths.includes
    }))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.paths.publiccss))
})

gulp.task('js-app-concat', [ 'clean' ], () => {
  return gulp.src(config.paths.appjs)
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.publicjs))
})

gulp.task('js-app-uglify', [ 'js-app-concat' ], () => {
  return gulp.src(config.paths.appjs)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.publicjs))
})

gulp.task('default', [ 'less', 'js-app-uglify' ], () => {
  return gutil.log('With js-concat, primitive!')
})
