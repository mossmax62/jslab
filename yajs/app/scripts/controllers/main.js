'use strict';

/**
 * @ngdoc function
 * @name yajsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yajsApp
 */
angular.module('yajsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
