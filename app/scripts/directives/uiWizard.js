'use strict';

angular.module('uicomponents').controller('uiWizController', function(){
    this.ding = function(){}
    this.show = function(){console.log('aaa');return true}
    this.getSelected = function(){return 'one'}
})

angular.module('uicomponents')
    .directive('uiWizard', function () {
        return {
            template: '<div ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            scope : {},
            controller : 'uiWizController',
            link: function (scope, element, attrs, $transclude) {
                console.log($transclude)
            }
        };
    });
