app.controller('header.controller', [
    '$scope',
    '$rootScope',
    '$location',
    '$window',
    '$routeParams',
    '$route',
    '$filter',
    '$httpParamSerializer',
    'auth',
    'Popeye', function($scope, $rootScope, $location, $window, $routeParams, $route, $filter, $httpParamSerializer, auth, Popeye) {

    console.log("Header");

    $scope.login = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/login/login.html",
                controller: "login.controller",
                modalClass: "login-modal",
                resolve : {
                    target : function() {
                        return false;
                    }
                }
            });
        }
    };

    $scope.logout =  {

        die : function() {

            if (auth.logout())
                $window.location.reload();
        }
    };

    $scope.register = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/register/register.html",
                controller: "register.controller",
                modalClass: "register-modal"
            });
        }
    };

    $scope.forgot = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/forgot/forgot.html",
                controller: "forgot.controller",
                modalClass: "forgot-modal"
            });
        }
    };

    $scope.search = {

        fields : {
            "q" : null
        },

        submit : function() {
            console.log("vai");
            $location.path('/search').search($httpParamSerializer(this.fields));
        }
    };

}]);
