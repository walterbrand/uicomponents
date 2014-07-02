'use strict';

describe('Controller: wizardController', function () {

  // load the controller's module
  beforeEach(module('uicomponents'));

  var wizardController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    wizardController = $controller('wizardController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(wizardController).toBe(3);
  });
});
