app.directive('headerView',[
    'auth',
    function(auth) {

    var isLogged = function() {

        if ( ! auth.check()) {
            return "views/header/header.html";
        }

        return "views/header/header.logged.html";
    };

    return({
        controller: "header.controller",
        restrict: "AE",
        replace: true,
        templateUrl: isLogged()
    });

}]);