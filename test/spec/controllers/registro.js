'use strict';

describe('Controller: RegistroCtrl', function () {

  // load the controller's module
  beforeEach(module('vecinosunidosApp'));

  var RegistroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistroCtrl = $controller('RegistroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistroCtrl.awesomeThings.length).toBe(3);
  });
});
