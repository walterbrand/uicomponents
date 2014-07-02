'use strict';

describe('Directive: uiMoney', function () {

  // load the directive's module
  beforeEach(module('uicomponents'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-money></ui-money>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiMoney directive');
  }));
});
