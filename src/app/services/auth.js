app.factory('auth', function ($http, $cookies, $location, Popeye) {

    var service = "auth";
    var factory = {};

    factory.open = function($path) {

        $location.path('/');

        Popeye.openModal({
            templateUrl: "views/login/login.html",
            controller: "login.controller",
            modalClass: "login-modal",
            resolve : {
                target : function() {
                    return $path;
                }
            }
        });
    };

    factory.data = function() {
        return factory.cookie();
    };

    factory.set = function(data) {

        if ( ! _.isEmpty(data.session)) {
            $cookies.put('_session.descontador.com.br', data.session.token);

            if (factory.check())
                return true;

            return false;
        }

        return false;
    };

    factory.get = function(id) {

        var req = {
            url : API.HOST + service + "/session/" + API.FORMAT,
            method : "GET",
            params : {
                api_key : API.KEY,
                id : id
            }
        };

        $http(req).then(function(response){
            if (response.status == 200)
                factory.set(response.data);
        });

        return factory.data();
    };

    factory.update = function() {

        //var req = {
        //    url : API.HOST + service + "/update/" + API.FORMAT,
        //    method : "GET",
        //    params : {
        //        api_key : API.KEY,
        //        id : factory.cookie()
        //    }
        //};
        //
        //var promise = $http(req).then(function(response){
        //    if (response.status == 200)
        //        return response.data;
        //});
        //
        //return promise;
    };

    factory.check = function() {

        if ( ! factory.cookie())
            return false;

        return true;
    };

    factory.cookie = function() {
        return $cookies.get('_session.descontador.com.br');
    };


    factory.delete = function() {
        return $cookies.remove('_session.descontador.com.br');
    };

    factory.logout = function() {

        if (_.isUndefined(factory.delete()))
            return true;

        return false;
    };

    return factory;

});