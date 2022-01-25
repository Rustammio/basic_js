const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    minifyjs = require('gulp-js-minify'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync')


function sassDir() {
    return gulp.src(`src/scss/index.scss`)
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

gulp.task('minify-js', function () {
    gulp.src('./src/js/index.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('prefix', function(done){
    gulp.src('dist/css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('scss',gulp.series( sassDir, 'prefix'));
gulp.task('w', function () {
    gulp.watch(`./src/scss/*.scss`, gulp.series(clear, sassDir))
})


