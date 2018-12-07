var gulp=require('gulp');
var uglify=require ('gulp-uglify') ; 
var del=require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
//压缩js
gulp.task('default', function() {
   gulp.src('js/a.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});
//清除dist
gulp.task('clean',()=>{
	del(['dist']);
});
//合并JS
gulp.task('concat',function(){
   gulp.src('a/**/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));
});
//改名
gulp.task('rename',function(){
   gulp.src('a/a.js')
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist'));
});
//es6->es5
gulp.task('babel',function(){
   gulp.src('a/a.js')
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(gulp.dest('dist'));
});
//连接服务器
gulp.task('connect',function(){
   connect.server({
        root: 'dist',
        port: '7777',
        livereload: true
    });
});