var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imgMin = require('gulp-imagemin');

// 检查脚本
gulp.task('lint', function() {
    gulp.src(['./public/javascripts/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 压缩图片
gulp.task('minImg', function () {
    gulp.src('./public/images/*.*')
        .pipe(imgMin({progressive: true}))
        .pipe(gulp.dest('./dist/images'))
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/stylesheets'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src(['./public/javascripts/*.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./dist/lib'));
});

// 监听文件变化
gulp.task('auto', function(event){
    gulp.watch('./*.*', function (event) {
        console.log('File' + event.path + 'was' + event.type +', run tasking');
    });
});

// 默认任务
gulp.task('default', function () {
    gulp.start('lint','minImg','sass','scripts','auto');
});