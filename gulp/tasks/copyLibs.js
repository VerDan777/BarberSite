    'use strict'

module.exports = function() {
    $.gulp.task('copyLibs',function(){

    return $.gulp.src( './src/libs/*.* ',{since: $.gulp.lastRun('copyLibs')})
        .pipe($.gulp.dest($.config.root + '/libs/' ))
    })
  
}