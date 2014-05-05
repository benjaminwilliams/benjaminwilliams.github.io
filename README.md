form-validation-test
====================

A simple angularjs app to play around with and demonstrate some useful features of Angular


## File structure

```
|-- index.html
|-- fonts 
    |-- (icon files included with bootstrap by default) // currently not used
|-- css
    |-- main.css // custom css 
    |-- (other required css files)
|-- js
    |-- app
        |-- data
            |-- countries.json // list of countries used to populate the country select field
        |-- partials
            |-- personal-details.html // the 1st virtual page
            |-- payment-details.html // the 2nd virtual page
    |-- test
        |-- angular
            |-- angular-mocks.js // required by tests only
        |-- jasmine // Our testing framework
            |-- (required jasmine js and css files used for testing)
        |-- spec
            |-- test.js // the actual tests, will become multiple files as project grows
        |-- karma.conf.js // Karma is our test runner, this files sets up the config
        |-- test.html // Sets the html for the tests and loads all the js files
    |-- vendor
        |-- (our required vendor files)
    |-- main.js // Currently not used
    

```

