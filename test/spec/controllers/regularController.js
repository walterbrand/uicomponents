'use strict';

describe('Controller: RegularcontrollerCtrl', function () {

    // load the controller's module
    beforeEach(module('uicomponents'));

    var regularController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        regularController = $controller('regularController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.data.name).toBe('');
        expect(scope.data.showValidation).toBeTruthy();
    });
});
