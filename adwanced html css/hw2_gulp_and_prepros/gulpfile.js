var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    jsMinify = require('gulp-js-minify'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed');


function sassDir() {
    return gulp.src(`src/scss/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
}
function clear() {
    return gulp.src('./dist/css/*')
        .pipe(clean())

}
function img() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}
gulp.task('scss', sassDir)
gulp.task('w', function () {
    gulp.watch(`./src/scss/*.scss`, gulp.series(clear, sassDir))
})
