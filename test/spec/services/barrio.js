'use strict';

describe('Service: barrio', function () {

  // load the service's module
  beforeEach(module('vecinosunidosApp'));

  // instantiate service
  var barrios;
  beforeEach(inject(function (_barrios_) {
    barrios = _barrios_;
  }));

  it('should do something', function () {
    expect(!!barrios).toBe(true);
  });

});
