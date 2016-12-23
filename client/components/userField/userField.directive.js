'use strict';
const angular = require('angular');

export default angular.module('acervacariocameanApp.userField', [])
  .directive('userField', function() {
    return {
      scope: {
        label: '@',
        name: '@',
        model: '='
      },
      template: require('./userField.html'),
      restrict: 'E',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
