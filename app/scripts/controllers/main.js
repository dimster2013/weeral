'use strict';

/**
 * @ngdoc function
 * @name yomanappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomanappApp
 */
angular.module('yomanappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
