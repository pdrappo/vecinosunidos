'use strict';

describe('Directive: probleList', function () {

  // load the directive's module
  beforeEach(module('vecinosunidosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<proble-list></proble-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the probleList directive');
  }));
});
