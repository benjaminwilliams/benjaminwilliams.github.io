module.exports = function(grunt, name) {
  return {
      karma: {
        unit: {
          configFile: '<%= paths.bundles.scripts %>/angular/js/test/karma.conf.js'
        }
      }

  };


};
