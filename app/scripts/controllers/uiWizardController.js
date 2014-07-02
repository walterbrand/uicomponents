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
                event = {
                    //TODO: zorg ervoor dat je via een preventDefault functie ervoor zorgt dat continueAction false wordt
                }

            // TODO: zorg ervoor dat het wizardChangeStart wordt ge-emit, met de volgende argumenten
            // - 'wizardChangeStart'
            // - het event van hierboven
            // - de stap waar je nu zit
            // - de stap waar je naartoe gaat
            $scope.$emit('wizardChangeStart', event, steps[fromStep], steps[toStep]);

            if (continueAction) {
                currentStep = toStep;
            }

        }
    });
