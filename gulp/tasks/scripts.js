    'use strict';

module.exports = function() {
$.gulp.task('js',function() {
   return  $.gulp.src('./src/js/*.*')
    .pipe($.gp.js())
    .on('error',$.gp.notify.onError(function(error){
       return { 
            title:'JS',
            message:error.message
       }

    }))
    .pipe($.gulp.dest($.config.root));
});
};
    


