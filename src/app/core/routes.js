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

        .when('/about-us', {
            templateUrl : 'views/about/about.html',
            controller  : 'about.controller'
        })

        .when('/contact-us', {
            templateUrl : 'views/contact/contact.html',
            controller  : 'contact.controller'
        })

        .when('/terms', {
            templateUrl : 'views/terms/terms.html',
            controller  : 'terms.controller'
        })

        .when('/privacy-policy', {
            templateUrl : 'views/policy/policy.html',
            controller  : 'policy.controller'
        })

        .when('/faq', {
            templateUrl : 'views/faq/faq.html',
            controller  : 'faq.controller'
        })

        .otherwise({ redirectTo: '/' });

}]);
