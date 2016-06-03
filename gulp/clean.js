const gulp = require('gulp')
const clean = require('gulp-clean')
const config = require('./gulp-config.json')

gulp.task('clean', () => {
  return gulp.src(config.paths.publicall)
    .pipe(clean({force: true}))
})
