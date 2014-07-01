'use strict';

angular.module('uicomponents')
    .directive('uiTextinput', function ($filter) {
        return {
            template: '<div><input type="text" placeholder="{{placeholder}}" ng-model="ngModel" /></div>',
            scope: {
                placeholder: '@',
                ngModel: '='
            },
            require: 'ngModel',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs, ngModel) {
                scope.internal = {

                }
            }
        }
    });
