var oshcPrototypeApp = angular.module('oshcPrototypeApp', ['ngResource']);

//Controllers

oshcPrototypeApp.controller('oshcPrototypeCtrl', ['$scope', 'Country',
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

