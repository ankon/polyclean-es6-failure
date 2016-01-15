'use strict';

var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('default', function (cb) {
  gulp.src('index.html')
    .pipe(polybuild({maximumCrush: true}))
    .pipe(gulp.dest('output/'));
});
