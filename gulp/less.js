const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')
const path = require('path')
const plumber = require('gulp-plumber')

const config = require('./gulp-config.json')

gulp.task('bootstrap-copy', ['clean'], () => {
  return gulp.src('node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'bootstrap')))
})

gulp.task('amelia-copy', ['bootstrap-copy'], () => {
  return gulp.src('lib/bootstrap/amelia.bootstrap.css')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'bootstrap/css')))
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
