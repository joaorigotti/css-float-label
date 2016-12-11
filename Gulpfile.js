'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const scssSrc = './css/estilos.scss';
const cssSrc = './css';

gulp.task('css', () => {
  gulp.src(scssSrc)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssSrc));
});

gulp.task('default', () => {
  gulp.watch(scssSrc, ['css']);
});
