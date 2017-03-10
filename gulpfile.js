var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minify = require("gulp-minify-css");

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var babelify = require('babelify');

// require('babelify-es6-polyfill');
require('babel-polyfill');

// TODO: Move to public folder


gulp.task('default', ['watch', 'build-css', 'copy-html', 'build-js']);

var input = {
    css_i: "src/client/scss/**/*",
    css: "src/client/scss/style.scss",
    html: "src/client/*.html",

    js_entry: ""
};

var output = {
    css: "build/static/css",
    html: "build"
};

/* Build Stylesheets */
gulp.task('build-css', () => {
    return gulp.src(input.css)
        .pipe(sass().on('error', sass.logError))
        // .pipe(concat("style.css"))
        .pipe(minify())
        .pipe(gulp.dest(output.css));
});

gulp.task('build-js', () => {
    var b = browserify({
         entries: ['src/client/js/main.js'],
         debug: true
     });

    //  b.transform(reactify); // use the reactify transform
    b.transform(babelify, {
        presets: ["es2015", "react"]
    });

     return b.bundle()
         .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
         .pipe(source('main.js'))
         .pipe(gulp.dest('build/static/js'));
});

gulp.task('copy-html', () => {
    return gulp.src(input.html)
        .pipe(gulp.dest(output.html));
});

/* Watchers */
gulp.task('watch', () => {
    gulp.watch(input.css_i, ['build-css']);
    gulp.watch(input.html, ['copy-html']);

    gulp.watch('src/**/*.js', ['build-js']);
    gulp.watch('src/**/*.jsx', ['build-js']);
});
