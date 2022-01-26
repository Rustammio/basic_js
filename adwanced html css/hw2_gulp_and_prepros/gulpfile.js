const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    minifyjs = require('gulp-js-minify'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync');


function sassdir() {
    return gulp.src(`src/scss/index.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream())
}

function cleaner() {
    return gulp.src('./dist/*')
        .pipe(clean())
}

function clear() {
    return gulp.src('./dist/css/*')
        .pipe(clean())

}

function img() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
        }))
        .pipe(gulp.dest('dist/images'))
}

function minifyJs() {
    return gulp
        .src("src/js/*.js")
        .pipe(concat("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js/"))
        .pipe(browserSync.stream());
};
gulp.task('m', minifyJs)

function cleanImg() {
    return gulp.src("dist/img/*").pipe(clean({force: true}));
}

gulp.task('scss', gulp.series(sassdir));
gulp.task('w', function () {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch(`./src/scss/*.scss`, gulp.series(gulp.series(clear, sassdir)))
    gulp.watch('src/img/', {events: 'all'}, gulp.series(cleanImg, img))
    gulp.watch('src/js/*.js', minifyJs)
})

gulp.task(
    "build",
    gulp.series(cleaner, gulp.parallel('m', img, sassdir,)))

gulp.task("dev", gulp.series("build", "w"));

