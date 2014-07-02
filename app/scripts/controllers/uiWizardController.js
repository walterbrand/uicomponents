'use strict';

angular.module('uicomponents')
    .controller('uiWizardController', function ($scope) {
        var steps = ['one', 'two'],
            currentStep = 0;

        this.show = function () {
            return true
        };

        this.getSelected = function () {
            return steps[currentStep];
        };

        $scope.action = function (direction) {

            var continueAction = true,
                fromStep = direction === 'next' ? 0 : 1,
                toStep = direction === 'next' ? 1 : 0,
                event = {preventDefault: function(){
                    continueAction = false;
                }}

            $scope.$emit('wizardChangeStart', event, steps[fromStep], steps[toStep]);

            if (continueAction) {
                currentStep = toStep;
            }

        }
    });
