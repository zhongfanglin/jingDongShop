var gulp = require('gulp');//引入gulp
var uglify = require('gulp-uglify');//压缩js
var babel = require('gulp-babel');//es6转译
var connect = require('gulp-connect');//服务器
var concat = require('gulp-concat');//合并
var minicss = require('gulp-clean-css');//压缩CSS
var minihtml = require('gulp-html-minify');//压缩html
var del = require('del');//删除整个文件
const rev = require('gulp-rev');//添加版本号
var revCollector = require('gulp-rev-collector');//修改路径版本号
var run = require('run-sequence');//异步执行
var miniimg = require('gulp-imagemin');//图片压缩
//所有文件实时更新
gulp.task('minijson', function() {
    gulp.src('./json/*.json')
    .pipe(gulp.dest('dist/json'))
})
//压缩js
gulp.task('minijs',function(){
    gulp.src('./js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .on('error', function(error) {
        	console.log(error.message)
        	this.emit('end');
        })
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
    console.log('压缩JS成功')
})
//图片压缩
gulp.task('miniimg',function(){
    gulp.src('./images/*.*')
        .pipe(miniimg())
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())
    console.log('压缩img成功')
})
//压缩css
gulp.task('minicss',function(){
    gulp.src('./css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
    console.log('压缩css成功')
})
//压缩HTML
gulp.task('minihtml',function(){
    gulp.src('./*.html')
        .pipe(minihtml({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())//实时刷新
    console.log('压缩html成功')
})
//监听实时更新
gulp.task('watch',function(){
	gulp.watch('./json/*.json',['minijson'])
    gulp.watch('./js/*.js',['minijs'])
    gulp.watch('./css/*.css',['minicss'])
    gulp.watch('./images/*.*',['miniimg'])
    gulp.watch('./*.html',['minihtml'])
})

//打开服务器
gulp.task('connect',function(){
    connect.server({
        root: './dist',//服务器默认文件夹
        port: '7777',//端口号
        livereload: true
    })
    console.log('服务器已开启')
})


//删除文件
gulp.task('clean', function () {
    del(['dist'])
});
gulp.task('dev',['minicss','minijs','minijson','miniimg','minihtml','connect']);
