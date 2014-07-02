'use strict';

angular.module('uicomponents')
    .factory('dataService', function () {

        var data = null,
            formHandler = null;

        function getData(){
            return data;
        }

        function setData(_data_) {
            data = _data_;
        }

        function submit(){
            return formHandler();
        }

        function registerFormHandler(_formHandler_) {
            formHandler = _formHandler_;
        }

        // Public API here
        return {
            //TODO: expose de methoden om data te lezen, te zetten, een submit actie te kunnen doen en de formHandler te kunnen registeren
       };
    });
