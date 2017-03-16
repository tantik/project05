var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass');
gulp.task('sass', function () {
	gulp.src('./assets/css/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(csso())
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    gulp.src([
                './assets/js/main.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});
gulp.task('images', function() {
    gulp.src('./assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/'))
});
gulp.task('watch', function () {
	gulp.watch('./assets/css/**/*.scss', ['sass']);
	gulp.watch('./assets/js/**/*.js', ['js']);
	gulp.watch('./assets/images/**/*', ['images']);
});