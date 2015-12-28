'use strict';

angular.module('hApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myroute', {
        url: '/chart',
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
