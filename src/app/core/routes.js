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

        .when('/stores', {
            templateUrl : 'views/stores/stores.html',
            controller  : 'stores.controller'
        })

        .when('/coupons', {
            templateUrl : 'views/coupons/coupons.html',
            controller  : 'coupons.controller'
        })

        .when('/new-offer', {
            templateUrl : 'views/offer/new.html',
            controller  : 'new.controller'
        })

        .when('/new-offer/product', {
            templateUrl : 'views/offer/product.html',
            controller  : 'product.controller'
        })

        .when('/new-offer/coupon', {
            templateUrl : 'views/offer/coupon.html',
            controller  : 'coupon.controller'
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
