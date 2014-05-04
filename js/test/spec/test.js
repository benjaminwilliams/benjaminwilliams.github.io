
'use strict';

beforeEach(module("oshcPrototypeApp"));

  describe('validateAlphanumeric Test',function(){
    var $scope;
    var form;

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.mockField" name="mockField" validate-alphanumeric />' +
        '</form>'
      );
      $scope.model = { mockField: null};
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should allow numbers letters and spaces', inject(function(){
      form.mockField.$setViewValue('foo Bar 1');
      expect(form.mockField.$valid).toBe(true);
    }));

    it('should NOT allow special characters', inject(function(){
      form.mockField.$setViewValue('foo #');
      expect(form.mockField.$valid).toBe(false);
      form.mockField.$setViewValue('!');
      expect(form.mockField.$valid).toBe(false);
    }));

    it('should allow null to be valid', inject(function(){
      form.mockField.$setViewValue('');
      expect(form.mockField.$valid).toBe(true);
    }));

  });


