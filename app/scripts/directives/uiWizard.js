'use strict';

angular.module('uicomponents')
    .directive('uiWizard', function () {
        return {
            template: '<div><div ng-transclude></div><button>Vorige</button><button ng-click="next()">Volgende</button></div>',
            restrict: 'E',
            transclude: true,
            scope : {},
            controller : 'uiWizardController',
            link: function (scope, element, attrs, $transclude) {
                console.log($transclude)
            }
        };
    });

