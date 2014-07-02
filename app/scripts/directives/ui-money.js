'use strict';

angular.module('uicomponents')
    .directive('uiMoney', function () {
        return {
            template: '<div><input type="text" ng-model="data.euros" size="10" ng-change="update()"/><input type="text" ng-model="data.cents" size="5" ng-change="update()"/></div>',
            restrict: 'E',
            require : 'ngModel',
            replace: true,
            scope: {
                ngModel : '='
            },
            link: function postLink(scope, element, attrs, ngModel) {
                var amountParts = scope.ngModel.split('.');
                scope.data = {
                    euros : amountParts[0],
                    cents : amountParts[1]
                }

                scope.update = function(){
                    scope.ngModel = scope.data.euros + '.' + scope.data.cents
                    ngModel.$setValidity('isNumber', !isNaN(scope.data.euros) && !isNaN(scope.data.cents))
                }
            }
        };
    });
