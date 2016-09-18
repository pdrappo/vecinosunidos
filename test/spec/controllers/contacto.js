'use strict';

describe('Controller: ContactoCtrl', function () {

  // load the controller's module
  beforeEach(module('vecinosunidosApp'));

  var ContactoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactoCtrl = $controller('ContactoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactoCtrl.awesomeThings.length).toBe(3);
  });
});
