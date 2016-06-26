/// <binding AfterBuild='default' Clean='clean' ProjectOpened='watch-scss' />
"use strict";

var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");

var webroot = "./wwwroot/";
var approot = "./app/";

var paths = {
    app: approot + "**/*.{js,html,css}",
    output: webroot + "app",
    scss: approot + "**/*.scss"
};

gulp.task("clean-app", function () {
    return del(paths.output);
});

gulp.task("clean", ["clean-app"]);

gulp.task("build-app", function () {
    return gulp.src(paths.app)
        .pipe(gulp.dest(paths.output));
});

gulp.task("build-scss", function () {
    return gulp.src(paths.scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(paths.output));
});

gulp.task("watch-scss", function () {
    return gulp.watch(paths.scss, ["build-scss"]);
});

gulp.task("default", ["build-app", "build-scss"]);