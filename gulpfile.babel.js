import gulp from 'gulp'
import babel from 'gulp-babel'
import del from 'del'
import rename from 'gulp-rename'

gulp.task('clean', () => del('dist'))
gulp.task('copy', ['clean'], () => gulp.src('../VLXD/dist/pwa-mat/**').pipe(gulp.dest('./dist')))
gulp.task('package', ['clean'], () =>
  gulp
    .src('./dist.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('./dist'))
)
gulp.task('es6', ['copy', 'package'], () =>
  gulp
    .src(['**/*.js', '!*.babel.js', '!node_modules/**', '!dist/**'])
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
)
