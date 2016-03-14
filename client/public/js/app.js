'use strict';
var app = angular.module('userApp', ['ui.router', 'authService', 'userService'])
  .config(['$stateProvider', '$urlRouterProvider', MainRouter])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("loginPage", {
      url: "/",
      templateUrl: "views/templates/login.html",
      controller: 'MainController',
      controllerAs: 'login'
    })
    .state("mainPage", {
      url: "/home",
      templateUrl: "views/templates/water.html"
    })

    // .state('/login', {
    //   templateUrl: 'views/pages/login.html',
    // })

    $urlRouterProvider.otherwise('/')
}




