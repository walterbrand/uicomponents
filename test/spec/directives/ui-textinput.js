'use strict';

describe('Directive: uiTextinput', function () {

    // load the directive's module
    beforeEach(module('uicomponents'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.data = {

        }
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<ui-textinput ng-model="data.na" placeholder="kkk"></ui-textinput>');
        element = $compile(element)(scope);
        expect(element.html()).toBe('this is the uiTextinput directive');
        expect(element.attr('ng-model')).toBe('text1');
        expect(element.hasClass('ng-pristine')).toBe(true)
        expect(element.isolateScope().placeholder).toBe({})
        expect(element.attr('placeholder')).toBe('')
    }));
});
