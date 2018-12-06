var gulp = require('gulp');
gulp.task('default', function() {
// 将你的默认的任务代码放在这
   gulp.src('-/js/a.js')
  .pipe(minify())
  .pipe(gulp.dest('dest'));
});
//gulp.task('hellow1',function(){
//	console.log('nihao');
//});
//gulp.task('hellow2',function(){
//	console.log('buhao1');
//});
//gulp.task('hellow3',function(){
//	console.log('buhao2');
//});
//gulp.task('hellow',['hellow1','hellow2','hellow3'],function(){
//	console.log('I am fine');
//})
//gulp.task('one',function(cb){
//	cb(err);
//})
//gulp.task('two',['one'],function(){
//	
//});
//gulp.task('default',['one','two']);
