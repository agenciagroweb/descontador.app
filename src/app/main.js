var app = angular.module('descontador', [
    'core.routes',
    'ui.bootstrap',
    'ui.utils.masks',
    'ngAnimate',
    'ngCookies'
]);

var socket = {};

var API = {
    HOST    : "http://api.descontador.com.br/",
    KEY     : "348caba53c1234487714035965ad49fb",
    VERSION : "v1",
    FORMAT  : "json"
};

var GSTATIC = {
    HOST : "https://maps.googleapis.com/maps/api/staticmap?",
    KEY : "AIzaSyCM0KLxQhBdC92YGTY0E8wp3GlpyXCtpSc",
    ZOOM : "14",
    SIZE : "360x320",
    TYPE : "roadmap"
};

(function() {

    //fetchData().then(bootstrapApplication);

    fetchData();

    function fetchData() {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get("$http");

        //var session = Cookies.get("descontador.com.br");
        //
        //var req = {
        //    url : API.HOST  + "auth/session/" + API.FORMAT,
        //    method : "GET",
        //    params : {
        //        api_key : API.KEY,
        //        id : (session) ? session : "null"
        //    }
        //};
        //
        //return $http(req).then(function(response){
        //    if ( ! jQuery.isEmptyObject(response.data.session))
        //        window.app.Session = response.data;
        //});

        return bootstrapApplication();
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["descontador"]);
        });
    }

}());

app.config([
    '$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    }
]);

app.run([
    '$rootScope',
    '$location',
    function ($rootScope, $location) {

        $rootScope.path = $location.path();
        $rootScope._ = _;

        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.path = $location.path();
        });
    }
]);

window.app.Session = {};