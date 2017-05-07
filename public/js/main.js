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

    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York, NY 11111'
        },
        {
            name: 'Jim Doe',
            address: '555 Main St.',
            city: 'New York, NY 11111'
        },
        {
            name: 'Jane Doe',
            address: '555 Main St.',
            city: 'New York, NY 11111'
        }
    ]

    $scope.formatAddress = function(person) {
        return person.name + person.address + person.city
    }

}]);

app.controller('secondCntrl', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {


}]);

app.directive('searchResult', function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/searchResults.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        transclude: true
    }
})
