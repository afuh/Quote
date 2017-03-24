var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../"
    });

    gulp.watch(["../*.html", "../*.js"]).on('change', browserSync.reload);
    gulp.watch("../styles/lib/*.s+(a|c)ss", ['sass']);
});

gulp.task('sass', function() {
  return gulp.src("../styles/lib/main.sass")
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'nested'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("../styles"))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
