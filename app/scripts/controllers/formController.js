'use strict';

angular.module('uicomponents')
    .controller('formController', ['$scope', 'dataService', function ($scope, dataService) {
        function checkForm(){
            dataService.setData($scope.data)
            return $scope.formulier.$valid;
        }

        dataService.registerFormHandler(checkForm);

    }]);
