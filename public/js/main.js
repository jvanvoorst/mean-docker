/* jshint esversion: 6 */

const app = angular.module('app', []);

app.controller('mainCntrl', ['$scope', ($scope) => {
    $scope.name = 'Hello Angular';
}]);

app.controller('secondCntrl', ['$scope', ($scope) => {
    $scope.name = 'Second';
}]);
