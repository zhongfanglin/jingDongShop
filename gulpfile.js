var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat=require('gulp-concat');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var del=require('del');
var connect= require('gulp-connect'); 
var watch = require('gulp-watch');
var revCollector = require('gulp-rev-collector')
//生成哈希值
var rev= require('gulp-rev');
gulp.task('default',['htmlmin','minijs','watch','connect']);
gulp.task('minijs',function(){
	gulp.src('js/**/*.js')
	 //合并js
	.pipe(concat('all.js'))
	//转义es6->es5
	 .pipe(babel({
            presets: ['@babel/env']
        }))
	//压缩js
	.pipe(uglify())
	//生成哈希值
	.pipe(rev())
	//重命名js
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('rev/js'))
	.pipe(connect.reload());
});
gulp.task('concatjs',function(){
	gulp.src('js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist'))
	//自动刷新
	.pipe(connect.reload());
});
gulp.task('htmlmin',function(){
//	gulp.src('index.html')
	gulp.src(['rev/**/*.json','*.html'])
//	.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(revCollector())
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});
//打开连接
gulp.task('connect', function() {
  connect.server({
  	//根目录
  	root:'dist',
  	//端口号
  	port: '6666',
  	//热更新
  	livereload:true
  });
});
//监听事件
gulp.task('watch',function(){
	//监听html
	gulp.watch('all.html',['htmlmin']);
	//监听js
	gulp.watch('js/*.js',['htmlmin']);
});
//没有node_modules只需cnpm install;
//删除文件
gulp.task('clean',function(){
	del(['dist']);
})