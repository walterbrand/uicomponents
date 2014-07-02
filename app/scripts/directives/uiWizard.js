'use strict';

angular.module('uicomponents')
    .directive('uiWizard', function () {
        return {
            templateUrl: 'partials/uiwizard.html',
            restrict: 'E',
            // TODO: zorg ervoor dat deze directive mag transcluden
            scope : {},
            controller : 'uiWizardController',
            link: function (scope, element, attrs, $transclude) {
            }
        };
    });

