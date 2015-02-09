'use strict';

/**
 * @ngdoc function
 * @name yajsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yajsApp
 */
angular.module('yajsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
