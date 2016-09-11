'use strict';

/**
 * @ngdoc function
 * @name cbtNgCssApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cbtNgCssApp
 */
angular.module('cbtNgCssApp')
  .controller('LoginCtrl', function ($scope, $window, $location) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      console.log('login.js here and get name from localStorage is ' + $window.localStorage.getItem('name') );
      $scope.mysubmit = function () {
        //$scope.isUserAuth = !$scope.isUserAuth;
        console.log('login success and set name');
        $window.localStorage.setItem('name','jincm');
        $location.path('/user').replace();
      };
  });
