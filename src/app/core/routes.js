angular.module('core.routes', ['ngRoute']).config([
    '$routeProvider',
    '$compileProvider',
    '$locationProvider', function($routeProvider, $compileProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl : 'views/home/home.html',
            controller  : 'home.controller'
        })

        .when('/offer/:slug', {
            templateUrl : 'views/offer/offer.html',
            controller  : 'offer.controller'
        })

        .otherwise({ redirectTo: '/' });

}]);
