'use strict';

describe('Service: Dataservice', function () {

    // load the service's module
    beforeEach(module('uicomponents'));

    // instantiate service
    var dataService;
    beforeEach(inject(function (_dataService_) {
        dataService = _dataService_;
    }));

    it('should return null when getData is called', function () {
        expect(dataService.getData()).toBeNull();
    });

    it('should keep the data when setData is called and replace all of it when called again', function(){
        dataService.setData({name:'Walter'});
        expect(dataService.getData()).toEqual({name:'Walter'});

        // replacing the data with something else
        dataService.setData({amount:{currency:'EUR', value: 100.00}});
        expect(dataService.getData()).toEqual({amount:{currency:'EUR', value: 100.00}});
    });

});
