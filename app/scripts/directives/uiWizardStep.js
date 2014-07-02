'use strict';

angular.module('uicomponents')
    .directive('uiWizardStep', function ($timeout) {
        return {
            template: '<div ng-transclude ng-show="show()"></div>',
            restrict: 'E',
            transclude: true,
            scope: {id:'@'},
            require :'^uiWizard',
            link: function postLink(scope, element, attrs, uiWizard) {
                scope.show = function(){
                    return scope.id == uiWizard.getSelected();
                }
            }
        };
    });
