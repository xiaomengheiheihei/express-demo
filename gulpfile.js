var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jade = require('gulp-jade');

gulp.task('clean', function() {		// 清除
    return gulp.src('dist', {read: false})
                .pipe(clean());
});

// 编译html
// gulp.task ('html', function () {
// 	gulp.src('./views/*.jade')
// 		.pipe(jade())
// 		.pipe(gulp.dest('./dist/views'));
// });

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./routes/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/stylesheets'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./routes/*.js')
        .pipe(concat('route.js'))
        .pipe(gulp.dest('./dist/lib'))
        .pipe(rename('route.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/lib'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./routes/*.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });
});