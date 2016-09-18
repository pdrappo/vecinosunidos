'use strict';

describe('Controller: PortalCtrl', function () {

  // load the controller's module
  beforeEach(module('vecinosunidosApp'));

  var PortalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortalCtrl = $controller('PortalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortalCtrl.awesomeThings.length).toBe(3);
  });
});
