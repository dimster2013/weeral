'use strict';

/**
 * @ngdoc function
 * @name yomanappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yomanappApp
 */
angular.module('yomanappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
