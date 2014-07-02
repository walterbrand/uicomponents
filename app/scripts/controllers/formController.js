'use strict';

angular.module('uicomponents')
    .controller('formController', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


    }]);
