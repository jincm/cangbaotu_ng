'use strict';

/**
 * @ngdoc function
 * @name cbtNgCssApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cbtNgCssApp
 */
angular.module('cbtNgCssApp')
  .controller('LoginCtrl', [
    '$scope',
    '$http',
    '$window',
    '$location',
    function ($scope, $http, $window, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('login.js here and get name from localStorage is ' + $window.localStorage.getItem('name') );

    $scope.login = {};

    console.log("input is " + JSON.stringify($scope.login));

    $scope.mylogin = function () {
      //$scope.isUserAuth = !$scope.isUserAuth;
      console.log('login success and set name');
      $window.localStorage.setItem('name','jincm');
      $location.path('/user').replace();
    };
    $scope.myregister = function() {
      console.log("register here");
    };
    $scope.get_identify_code = function() {
      console.log("input is " + JSON.stringify($scope.login));
      //$scope.login.identify_code = 111;
      var http_path = 'http://192.168.3.3:8080/v1/u/register?jsonp=JSON_CALLBACK&account=' + $scope.login.phone;
      $http.jsonp(http_path).success(function(res) {
        console.log("response is " + res.body);
      });
      console.log("get_identify_code here paht is " + http_path);
    };

  }]);
