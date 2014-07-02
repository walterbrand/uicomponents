'use strict';

angular.module('uicomponents')
    .controller('uiWizardController', function ($scope) {
        var steps = ['one', 'two'],
            currentStep = 0;

        this.ding = function () {
        }
        this.show = function () {
            console.log('aaa');
            return true
        }
        this.getSelected = function () {
            return 'one'
        }

        $scope.next = function () {
            console.log('emit')
            var continueAction = true
            var event = {preventDefault: function(){
                continueAction = false;
            }}
            $scope.$emit('wizardChangeStart', event, steps[0], steps[1]);
            console.log(continueAction);
        }
    });
