'use strict';

/**
 * @ngdoc function
 * @name cbtNgCssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cbtNgCssApp
 */
angular.module('cbtNgCssApp')
  .controller('AppCtrl', [
    '$scope',
    '$window',
    '$location',
    function ($scope, $window, $location) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      //define some random object and button values
      //this.bigData = {};
      //this.bigData.breakfast = false;
      //COLLAPSE =====================
      $scope.isCollapsed = false;

      $scope.isLogin = function() {
        console.log('check if is login');
        if($window.localStorage.getItem('name') !== 'jincm') {
          console.log('has not login');
          return false;
        }
        else {
          console.log('has login');
          return true;
        }
      };

      $scope.name = "jincm111";
      console.log('here');

      //$window.localStorage.setItem('name','jincm');

      console.log("main get is " + $window.localStorage.getItem('name'));
      console.log("auth is " + $scope.isUserAuth + " url is " + $location.path());

      $scope.logout = function () {
        console.log('logout success and clear');
        $window.localStorage.removeItem('name');
      };

  }]);
