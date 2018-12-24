"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require('gulp-plumber');
var postcss = require("gulp-postcss");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var autoprefixer = require("autoprefixer");
var webp = require("gulp-webp");
var imagemin = require("gulp-imagemin");
var bro = require("gulp-bro");
var uglify = require("gulp-uglify");
var del = require("del");
var pump = require("pump");
var run = require("run-sequence");
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
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg,webp}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

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
  gulp.watch("source/js/modules/*", ["compress"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("compress", function() {
  return gulp.src("source/js/modules/main.js")
    .pipe(bro())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest("source/js"))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("source/js"));
});

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/*",
    "source/js/bundle.min.js",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(done) {
  run(
    "clean",
    "compress",
    "copy",
    "style",
    done
  );
});
