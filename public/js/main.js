var app = angular.module('app', []);

app.constroller('mainCntrl', ['$scope', function($scope) {
    $scope.greet = 'Hello Angular';
}]);
