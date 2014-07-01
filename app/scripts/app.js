'use strict';

angular.module('uicomponents', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('home', {
            url:'/',
            templateUrl :'views/regularinput.html'
        });
    });
