var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var tsProject = ts.createProject('./tsconfig.json');
gulp.task('ts', function() {
	return tsProject
		.src()
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.js.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(''));
});
gulp.task('ts:uglify', ['ts'], function() {
	return gulp
		.src('dist/all.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.extname = ".min.js";
          }))
		.pipe(gulp.dest('dist'));
});
gulp.task('default', ['ts:uglify'], function() {});
