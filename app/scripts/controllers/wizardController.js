'use strict';

angular.module('uicomponents')
  .controller('wizardController', ['$scope', function ($scope,dataService) {
        // TODO: injecteer de dataService
        var isValidationShown = false;

        $scope.$on('wizardChangeStart', function(eventName, event, fromStep, toStep){

            if(dataService.submit()) {
                //TODO: schrijf de data uit de dataService op $scope.output
            } else {
                // Het formulier isvalid
                isValidationShown = true;
                // TODO: zorg ervoor dat je preventDefault van het event aanroept
            }
        });

        $scope.output = {

        }

        $scope.showValidation = function(){
            return isValidationShown ? 'showValidation' : '';
        }
  }]);
