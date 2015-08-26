var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');
    
gulp.task('styles', function () {
    gulp.src('_uncompressed/scss/*.scss')
        .pipe(sass({
          includePaths: require('node-bourbon').includePaths
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'))
        .pipe(notify({ message: 'Sass successfully compiled ;-)' }));
});

gulp.task('scripts', function() {
  return gulp.src('_uncompressed/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_uncompressed/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(notify({ message: 'Scripts uglified' }));
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('_uncompressed/scss/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('_uncompressed/js/**/*.js', ['scripts']);

});

gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});
