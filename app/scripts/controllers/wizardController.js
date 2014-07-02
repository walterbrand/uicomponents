'use strict';

angular.module('uicomponents')
  .controller('wizardController', function ($scope) {
        this.ding = function(){}
        this.show = function(){console.log('aaa');return true}
        this.getSelected = function(){return 'one'}
  });
