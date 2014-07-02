'use strict';

angular.module('uicomponents')
    .directive('uiTextinput', function () {
        return {
            // TODO: maak een template waarbij je de placeholder tekst overneemt en ngModel koppelt
            scope: {
                // TODO: maak een one way binding met placeholder
                // TODO: maak een two way binding met ngModel
            },
            require: 'ngModel',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs, ngModel) {

            }
        }
    });
