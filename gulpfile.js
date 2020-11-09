const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");
gulp.task("html", done => {
    gulp.src("index.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());

    done();
});
gulp.task("html1", done => {
    gulp.src("html/*")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());

    done();
});

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compact"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});
gulp.task("copyImg", done => {
    gulp.src("images/*")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
    done();
});
gulp.task("copyJs", done => {
    gulp.src("js/*")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});
gulp.task("iconfont", done => {
    gulp.src("iconfont/*")
        .pipe(gulp.dest("dist/iconfont"))
        .pipe(connect.reload());
    done();
});


gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});

gulp.task("build", gulp.series("html", "html1", "copyImg", "copyJs", "iconfont", "sass"));

gulp.task("watch", done => {
    gulp.watch("index.html", gulp.series("html"));
    gulp.watch("html/*.html", gulp.series("html1"));
    gulp.watch("images/*", gulp.series("copyImg"));
    gulp.watch("js/*", gulp.series("copyJs"));
    gulp.watch("iconfont/*", gulp.series("iconfont"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    done();
});

gulp.task("default", gulp.series("build", "server", "watch"));