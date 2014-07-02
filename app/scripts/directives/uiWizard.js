'use strict';

angular.module('uicomponents')
    .directive('uiWizard', function () {
        return {
            template: '<div><div ng-transclude></div><button ng-click="action(\'previous\')">Vorige</button><button ng-click="action(\'next\')">Volgende</button></div>',
            restrict: 'E',
            transclude: true,
            scope : {},
            controller : 'uiWizardController',
            link: function (scope, element, attrs, $transclude) {
            }
        };
    });

