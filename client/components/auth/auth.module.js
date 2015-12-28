'use strict';

angular.module('hApp.auth', [
  'hApp.constants',
  'hApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
