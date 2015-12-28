'use strict';

angular.module('hApp')
 .directive('highCharts', function () {
    return {
      templateUrl: 'components/highCharts/highCharts.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        
   
        
      },
    controller: 'highChartsController',
  
    controllerAs: 'chart'
    
    };
  });

