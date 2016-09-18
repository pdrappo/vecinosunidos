'use strict';

describe('Directive: activeLink', function () {

  // load the directive's module
  beforeEach(module('vecinosunidosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<active-link></active-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activeLink directive');
  }));
});
