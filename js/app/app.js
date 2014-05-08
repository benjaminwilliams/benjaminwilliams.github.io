
// App
//
var oshcPrototypeApp = angular.module('oshcPrototypeApp', [
  'ngRoute', // Used to route partials within a SPA
  'ngResource', // Used to get resources, in the prototype we are are using it to get a json file
  'oshcPrototypeControllers', // Our custom controllers
  'ui.bootstrap' // bootstrap ui for angular
]);

oshcPrototypeApp.config(['$routeProvider',

  /**
   * Defines the routes that tells the SPA which partial to load
   * @param $routeProvider
   */
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'js/app/partials/personal-details.html'
      }).
      when('/payment-details', {
        templateUrl: 'js/app/partials/payment-details.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


//Controllers

var oshcPrototypeControllers = angular.module('oshcPrototypeControllers', []);

oshcPrototypeControllers.controller('PaymentDetailsCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

  }]);

oshcPrototypeControllers.controller('oshcPrototypeCtrl', ['$scope', 'Country',
  function($scope, Country) {
    $scope.countries = Country.query();
  }]);



//Services

oshcPrototypeApp.factory('Country', ['$resource',
  function($resource){
    return $resource('js/app/data/countries.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);



//Directives

oshcPrototypeApp.directive('validateAlphanumeric', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
          scope.allowedCharacters = (viewValue && /^[A-Za-z 0-9]+$/.test(viewValue)) ? 'valid' : undefined;
          if(!viewValue || scope.allowedCharacters) {
            ctrl.$setValidity('validCharacters', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validCharacters', false);
            return undefined;
          }

      });
    }
  };
});


var DatepickerDemoCtrl = function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
};