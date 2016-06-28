angular.
  module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-grid></phone-grid>'
        }).
         when('/phones/list', {
          template: '<phone-list></phone-list>'
        }).
         when('/phones/grid', {
          template: '<phone-grid></phone-grid>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);