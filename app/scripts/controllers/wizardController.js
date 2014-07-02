'use strict';

angular.module('uicomponents')
  .controller('wizardController', ['$scope', 'dataService', function ($scope, dataService) {
        var isValidationShown = false;

        $scope.$on('wizardChangeStart', function(eventName, event, fromStep, toStep){
            if(dataService.submit()) {
                $scope.output = dataService.getData();
            } else {
                // TODO: zorg ervoor dat de isValidationShow true wordt
                event.preventDefault();
            }
        });

        $scope.output = {
            personName: 'Walt'
        }
        // TODO: voeg een functie toe op de scope die de juiste classnaam 'showValidation' teruggeeft  op basis van isValidationShown
  }]);
