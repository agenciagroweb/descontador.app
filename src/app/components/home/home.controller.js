app.controller('home.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    '$httpParamSerializer', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, $httpParamSerializer) {

    console.log("Home");

    var base = angular.element("#home");

    $scope.place = {

        go : function(url) {
            $location.path(url);
        }
    };

}]);
