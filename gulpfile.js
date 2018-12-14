"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require('gulp-plumber');
var postcss = require("gulp-postcss");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var autoprefixer = require("autoprefixer");
var webp = require("gulp-webp");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
})

gulp.task("serve", function() {
  server.init({
    server: "source/",
    notify: false,
    online: true,
    open: true,
    cors: true,
    ui: false,
    port: 8080,
    logPrefix: "Mishka",
    host: "192.168.1.39"
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/js/*");
  gulp.watch("source/*.html").on("change", server.reload);
});
