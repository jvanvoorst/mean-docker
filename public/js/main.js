/* jshint esversion: 6 */

const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/first.html',
        controller: 'mainCntrl'
    })
    .when('/second', {
        templateUrl: 'views/second.html',
        controller: 'secondCntrl'
    })
    .when('/second/:num', {
        templateUrl: 'views/second.html',
        controller: 'secondCntrl'
    });

});

app.service('nameService', function() {
    // let self = this;
    this.name = 'Justin V';
    this.nameLength = () => this.name.length;
});

app.controller('mainCntrl', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', () => nameService.name = $scope.name );

    $log.log(nameService.name);
    $log.log(nameService.nameLength());

}]);

app.controller('secondCntrl', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', () => nameService.name = $scope.name );

    $scope.num = $routeParams.num || 'default';

}]);
