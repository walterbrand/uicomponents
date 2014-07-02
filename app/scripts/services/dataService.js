'use strict';

angular.module('uicomponents')
    .factory('dataService', function () {

        var data = null;

        function getData(){
            return data;
        }

        function setData(_data_) {
            data = _data_;
        }

        // Public API here
        return {
            getData : getData,
            setData : setData
        };
    });
