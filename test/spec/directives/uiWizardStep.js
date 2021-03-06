'use strict';

describe('Directive: uiWizardStep', function () {

  // load the directive's module
  beforeEach(module('uicomponents'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-wizard><ui-wizard-step></ui-wizard-step></ui-wizard>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the uiWizardStep directive');
  }));
});
