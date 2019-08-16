var gulp = require('gulp');
var babel = require('gulp-babel');

var jsFile = 'es6-input/scripts.js';

gulp.task('scripts', function() {
	return gulp.src(jsFile)
				.pipe(babel({
					presets: ['@babel/env']
				}))
				.pipe(gulp.dest('es5-output'))
});

gulp.task('watch', function() {
	gulp.watch(jsFile, gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts', 'watch'));