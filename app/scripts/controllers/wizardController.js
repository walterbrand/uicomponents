'use strict';

angular.module('uicomponents')
  .controller('wizardController', function ($scope) {
        $scope.$on('wizardChangeStart', function(eventName, event, fromStep, toStep){
            event.preventDefault();
        });
  });
