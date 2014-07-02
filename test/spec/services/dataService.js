'use strict';

describe('Service: Dataservice', function () {

  // load the service's module
  beforeEach(module('uicomponents'));

  // instantiate service
  var dataService;
  beforeEach(inject(function (_dataService_) {
    dataService = _dataService_;
  }));

  it('should do something', function () {
    expect(!!dataService).toBe(true);
  });

});
