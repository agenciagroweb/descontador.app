app.controller('forgot.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Forgot Password");

    var base = angular.element(".forgot");

    $scope.forgot = {

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

