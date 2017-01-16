app.controller('new.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    '$httpParamSerializer', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, $httpParamSerializer) {

    $scope.offer = {

        go : function(url) {
            $location.path(url);
        }
    };

}]);

