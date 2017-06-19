 'use strict'
  
  global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
      path: {
          task: require('./gulp/path/tasks.js'),
          app:require('./gulp/path/app.js'),    
      },
      gulp:require('gulp'),
      del:require('del'),
      webpack:require('webpack-stream'),
      browserSync:require('browser-sync').create(),
      gp:require('gulp-load-plugins')()
  };
  $.path.task.forEach(function(taskPath) {
      require(taskPath)();
  });

  $.gulp.task('default',$.gulp.series(

        // 'clean',
      $.gulp.parallel (
          'sass',
          'pug',
          'js',
          'copyImg',
          'copyLibs'
      ),
      $.gulp.parallel (
        'watch',
        'serve'
      )
  ))
