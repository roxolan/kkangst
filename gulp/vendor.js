const gulp = require('gulp')
const gutil = require('gulp-util')
const path = require('path')

gulp.task('bootstrap-copy', [ 'clean' ], () => {
  return gulp.src('node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'bootstrap')))
})

gulp.task('amelia-copy', [ 'bootstrap-copy' ], () => {
  return gulp.src('lib/bootstrap/amelia.bootstrap.css')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'bootstrap/css')))
})

gulp.task('jquery-copy', [ 'clean' ], () => {
  return gulp.src('node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'js', 'vendor', 'jquery')))
})

gulp.task('angular-copy', [ 'clean' ], () => {
  return gulp.src('node_modules/angular/angular.js')
    .pipe(gulp.dest(path.join(__dirname, '..', 'public', 'js', 'vendor', 'angular')))
})

gulp.task('vendor', [ 'amelia-copy', 'jquery-copy', 'angular-copy' ], () => {
  return gutil.log('Vendor libs copied!')
})
