const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const less = require('gulp-less')
const plumber = require('gulp-plumber')

const config = require('./gulp-config.json')

gulp.task('vendor-css', [ 'clean' ], () => {
  return gulp.src(config.paths.vendorcss)
    .pipe(plumber())
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.paths.publiccss))
})

gulp.task('less', [ 'clean', 'vendor-css' ], () => {
  return gulp.src(config.paths.appless)
    .pipe(plumber())
    .pipe(less({
      paths: config.paths.includes
    }))
    .pipe(concat('app.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.paths.publiccss))
})
