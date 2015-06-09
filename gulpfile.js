var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

function handleError(err) {
	console.log(err.message);
}

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('build', function() {
    browserify({
    entries: 'src/Game.js',
    debug: true
    })
    .transform(babelify)
    .on('error', handleError)
    .bundle()
    .on('error', handleError)
    .pipe(source('./game.js'))
    .on('error', handleError)
    .pipe(gulp.dest('./public/js'))
    .on('error', handleError);
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['build']);
    watch('./public/js')
    .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);