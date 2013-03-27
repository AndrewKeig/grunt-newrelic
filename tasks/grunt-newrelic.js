"use strict";

module.exports = function(grunt) {
  grunt.registerTask("newrelic", "generate a newrelic.js file", function(environment) {

    var env_name = environment;

    if (environment == null) {
        environment = "package";
        env_name = "development"
    }

    try {
        var config_path = "config/" + environment + ".json"
        , config_file = JSON.parse(grunt.file.read(config_path))
        , app_name = "app_name : ['" + env_name  + "-" + config_file.NEWRELIC.APP_NAME + "']"
        , license_key = "license_key : '" + config_file.NEWRELIC.LICENSE_KEY + "'"
        , logging_level = "level : " + config_file.NEWRELIC.LOGGING_LEVEL + "'"
        ;
    }
    catch(e) {
        grunt.log.ok("Unable to load configuration file %s", config_path);
    }

    try {
        var newrelic_file = grunt.file.read("node_modules/newrelic/newrelic.js")
                .replace("app_name : ['My Application']", app_name)
                .replace("license_key : 'license key here'", license_key)
                .replace("trace : 'trace'", logging_level);
    }
    catch(e) {
        grunt.log.ok("Unable to load newrelic.js from %s", "node_modules/newrelic/newrelic.js");
    }

    try {
        grunt.file.write("newrelic.js", newrelic_file);
        grunt.log.ok("newrelic.js saved to root");
    }
    catch(e) {
        grunt.log.ok("Unable to write newrelic.js");
    }
  });
};