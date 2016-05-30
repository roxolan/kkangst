const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')

const config = require('./gulp-config.json')

const clean = require('gulp-clean')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

gulp.task('clean', () => {
  return gulp.src(config.paths.publicall)
    .pipe(clean({force: true}))
})

gulp.task('less', [ 'clean' ], () => {
  return gulp.src(config.paths.appless)
    .pipe(plumber())
    .pipe(less({
      paths: config.paths.includes
    }))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.paths.publiccss))
})

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

gulp.task('watch-js', [ 'js-app-uglify' ], () => {
  gulp.watch(config.paths.appjs, ['js-app-uglify'])
})

gulp.task('watch-less', [ 'less' ], () => {
  gulp.watch(config.paths.appless, ['less'])
})

gulp.task('w', [ 'watch-less', 'watch-js' ], () => {
  return gutil.log('running gulp watch on less & js. vendor from CDNs')
})

gulp.task('default', [ 'less', 'js-app-uglify' ], () => {
  return gutil.log('With app & vendor from CDNs')
})
