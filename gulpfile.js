var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	pump = require('pump');

gulp.task('styles', function(){
	gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css/min'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./public/js/*.js'),
        uglify(),
        gulp.dest('./public/js/min/')
    ],
    cb
  );
});

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('sass/*.scss', ['styles']);
});
