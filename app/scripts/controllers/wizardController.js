'use strict';

angular.module('uicomponents')
  .controller('wizardController', ['$scope', 'dataService', function ($scope, dataService) {
        var isValidationShown = false;

        //TODO: zorg ervoor dat er wordt geluisterd naar wizardChangeStart events
        $scope.$on('', function(eventName, event, fromStep, toStep){
            if(dataService.submit()) {
                // TODO: update $scope.output met de huidige data in de dataService
            } else {
                // TODO: zorig dat de validatie wordt getoond
                // TODO: voorkom dat de volgende stap wordt gedaan (via preventDefault)
            }
        });

        $scope.output = {
            personName: 'Walt'
        }

        $scope.showValidation = function(){
            return isValidationShown ? 'showValidation' : '';
        }
  }]);
