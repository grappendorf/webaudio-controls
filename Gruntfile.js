module.exports = function(grunt) {

  var mapUrlToBowerComponents = function(req, res, next) {
    if (req.url.indexOf('/polymer/') == 0) {
      req.url = '/bower_components' + req.url;
    }
    return next();
  };

  grunt.initConfig({
    connect: {
      server: {
        options: {
          open: true,
          keepalive: true,
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(mapUrlToBowerComponents);
            return middlewares;
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);
};
