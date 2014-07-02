'use strict';

angular.module('uicomponents')
  .controller('wizardController', ['$scope', 'dataService', function ($scope, dataService) {
        var isValidationShown = false;

        $scope.$on('wizardChangeStart', function(eventName, event, fromStep, toStep){
            if(dataService.submit()) {
                $scope.output = dataService.getData();
            } else {
                isValidationShown = true;
                event.preventDefault();
            }
        });

        $scope.output = {
            personName: 'Walt'
        }

        $scope.showValidation = function(){
            return isValidationShown ? 'showValidation' : '';
        }
  }]);
