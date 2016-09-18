'use strict';

describe('Controller: UsuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('vecinosunidosApp'));

  var UsuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuarioCtrl = $controller('UsuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsuarioCtrl.awesomeThings.length).toBe(3);
  });
});
