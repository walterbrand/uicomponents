'use strict';

angular.module('uicomponents')
    .directive('uiWizardStep', function ($timeout) {
        return {
            template: '<div ng-transclude ng-show="show()"></div>',
            restrict: 'E',
            transclude: true,
            scope: {id:'@'},
            require :'^uiWizard',
            link: function postLink(scope, element, attrs, uiWizard, $transclude) {
                console.log(uiWizard, scope.id)
                scope.show = function(a){
                    console.log('sss', scope.id)
                    return scope.id == uiWizard.getSelected();
                }

                $timeout(function(){
                    scope.show()
                },10)

            }
        };
    });
