
'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    // $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/img/**/*.*', $.gulp.series('copyImg'));
  });
};