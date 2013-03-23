grunt-newrelic
==============

grunt-newrelic will generate a newrelic.js file and add it to the route of your project;
with a license key, app_name and logging level pulled from a config file.


## Installation

Install npm package

    npm install grunt-newrelic

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks("grunt-newrelic");


## Usage

Create a config file:

{
  "NEWRELIC": {
    "APP_NAME": "Airasoul"
  , "LICENSE_KEY": "12345"
  , "LOGGING_LEVEL" : "trace"
  }
}

````
grunt newrelic
>> Use default config/package.json

grunt newrelic:development
>> Use config/development.json

grunt newrelic:test
>> Use config/test.json

grunt newrelic:staging
>> Use config/staging.json

grunt newrelic:production
>> Use config/production.json
````

