'use strict';

const gulp = require('gulp');
const style = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

/*SCSS convert in CSS*/
gulp.task('styles', function(){
	return gulp.src('css/sass/style.scss')
		.pipe(sourcemaps.init())
        .pipe(style().on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass Error!"
            })))
        .pipe(style().on( 'error', function( error )
            {
                console.log( error );
            } )
        )
		.pipe(style())
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('css/'))
        .pipe( notify( 'SASS - хорошая работа!'));
});
/* run server and watch on change in files*/
gulp.task('serve', ['styles'], function(){
	browserSync.init({
		server: './'
	});

	browserSync.watch('**/*.*').on('change', browserSync.reload);
});


gulp.task('zip_img', function () {
	gulp.src('src/image/*')
		.pipe(imagemin())
		.pipe(gulp.dest('src/imageOptimaze'))
});

gulp.task('watch', function(){
	gulp.watch('css/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['watch', 'serve']);
