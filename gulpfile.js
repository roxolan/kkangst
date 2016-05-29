const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')

const clean = require('gulp-clean')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

gulp.task('clean', () => {
  return gulp.src('public/css/*')
    .pipe(clean({force: true}))
})

gulp.task('less', [ 'clean' ], () => {
  return gulp.src('./client/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'lib', 'less', 'includes')]
    }))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'))
})

gulp.task('js-app-concat', [ 'clean' ], () => {
  return gulp.src('./client/app/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('js-app-uglify', [ 'js-app-concat' ], () => {
  return gulp.src('./client/app/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
})

gulp.task('default', [ 'less', 'js-app-uglify' ], () => {
  return gutil.log('With js-concat, primitive!')
})
