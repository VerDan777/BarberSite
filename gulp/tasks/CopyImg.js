module.exports = function () {

    $.gulp.task('copyImg',function() {

    return $.gulp.src('./src/img/**/*.*',{since:$.gulp.lastRun('copyImg')}) 
        .pipe($.gulp.dest($.config.root +'/img/'));
    });
};