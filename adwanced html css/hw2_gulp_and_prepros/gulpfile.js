
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    jsMinify = require('gulp-js-minify'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

var changed = require('gulp-changed');

let projectFolder = './dist';
let sourceProject = 'src';
const sassDir = function () {
    return gulp.src(`src/scss/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
}

gulp.task('scss', sassDir)
gulp.task('watch', function () {
    gulp.watch(`${sourceProject}/scss/*.scss`, sassDir)
})
gulp.task('default', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});