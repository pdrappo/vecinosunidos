'use strict';

describe('Controller: BarriosCtrl', function () {

  // load the controller's module
  beforeEach(module('vecinosunidosApp'));

  var BarriosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarriosCtrl = $controller('BarriosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarriosCtrl.awesomeThings.length).toBe(3);
  });
});
