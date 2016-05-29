const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')

const clean = require('gulp-clean')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')

gulp.task('clean', () => {
  return gulp.src('public/css/*')
    .pipe(clean({force: true}))
})

gulp.task('less', [ 'clean' ], () => {
  return gulp.src('./client/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'lib', 'less', 'includes')]
    }))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'))
})

gulp.task('default', [ 'less' ], () => {
  return gutil.log('Less processed!')
})
