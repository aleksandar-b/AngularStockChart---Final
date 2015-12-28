'use strict';

describe('Directive: highCharts', function () {

  // load the directive's module and view
  beforeEach(module('hApp'));
  beforeEach(module('components/highCharts/highCharts.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<high-charts></high-charts>');
    element = $compile(element)(scope);
    scope.$apply();
  
  }));
});
