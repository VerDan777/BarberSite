'use strict';

module.exports = function() {
  $.gulp.task('js', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())
      .pipe($.webpack.webpack())
      .pipe($.gp.sourcemaps.write())
       
  })
};