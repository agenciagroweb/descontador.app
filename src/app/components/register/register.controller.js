app.controller('register.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Register");

    var base = angular.element(".register");

    $scope.register = {

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

