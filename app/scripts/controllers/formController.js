'use strict';

angular.module('uicomponents')
    .controller('formController', ['$scope', function ($scope) {
        // TODO: injecteer de dataService
        function checkForm(){
            // TODO: set de recente data in de data service
            dataService.setData($scope.data)
            return $scope.formulier.$valid;
        }

        $scope.data = {
            balance : '190.95'
        };

        // TODO: registreer de form handler (= checkForm)

    }]);
