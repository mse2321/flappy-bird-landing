var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', function() {
  // place code for your default task here
});

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('site/files/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});