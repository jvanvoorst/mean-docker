var app = angular.module('app', []);

app.controller('mainCntrl', ['$scope', function($scope) {
    $scope.greet = 'Hello Angular';
}]);
