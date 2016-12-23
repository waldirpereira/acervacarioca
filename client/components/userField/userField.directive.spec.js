'use strict';

describe('Directive: userField', function() {
  // load the directive's module and view
  beforeEach(module('acervacariocameanApp.userField'));
  beforeEach(module('app/components/userField/userField.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<user-field></user-field>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the userField directive');
  }));
});
