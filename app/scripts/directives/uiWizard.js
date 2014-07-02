'use strict';

angular.module('uicomponents')
    .directive('uiWizard', function () {
        return {
            templateUrl: 'partials/uiwizard.html',
            restrict: 'E',
            transclude: true,
            scope : {},
            controller : 'uiWizardController',
            link: function (scope, element, attrs, $transclude) {
            }
        };
    });

