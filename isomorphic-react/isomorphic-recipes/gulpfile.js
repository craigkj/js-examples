var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    mocha = require('gulp-mocha'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    react = require ('gulp-react'),
    reactify = require ('reactify'),
    babel = require('babel/register'),
    jsxcs = require('gulp-jsxcs');

gulp.task('browserify', function() {
    return browserify('./app/app.js')
        .transform('reactify', {es6: true})
        .bundle()
        .pipe(source('bundle.js'))
        // .pipe(streamify(uglify()))
        .pipe(gulp.dest('./public/js'));
});

// gulp.task('codestyle', function () {
//     return gulp.src(['server.js', 'src/**/*.js', 'server/**/*.js', '!**/node_modules/**/*.js'])
//         .pipe(jsxcs());
// });

// gulp.task('jshint', function() {
//     return gulp.src(['server.js', 'src/**/*.js', 'server/**/*.js', 'test/**/*.js', '!**/node_modules/**/*.js'])
//         .pipe(react())
//         .pipe(jshint({'esnext' : true}))
//         .pipe(jshint.reporter(jshintStylish));
// });

gulp.task('mocha', function() {

    return gulp.src(['test/**/*.js'])
        .pipe(mocha({
            compilers: {
                js: babel
            },
            reporter: 'nyan'
        }));
});

gulp.task('test', ['mocha']);
