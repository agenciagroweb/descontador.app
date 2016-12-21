app.controller('login.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'auth',
    'Popeye',
    'target', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, auth, Popeye, target) {

    console.log("Login");

    var base = angular.element(".login");

    $scope.login = {

        auth : function() {

            var user =  {
                user: "Leonardo Moreira",
                email: "eu@leonardomoreira.com.br",
                picture: "https://graph.facebook.com/1636057229/picture?width=64&amp;height=64",
                session : {
                    token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjczMSwiaXNzIjoiaHR0cDpcL1wvYXBpLndlYXJlc3BvcnRzLmNvbS5iclwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDYxNzE2MjM5LCJleHAiOjE0NjE3MTk4MzksIm5iZiI6MTQ2MTcxNjIzOSwianRpIjoiNDBhZWQ0MDI5MTRhNDMzYWY4MGM3YWFjMGMwNzdiMjQifQ.7la5D9LzAnvCeIHYmZc-5hFMpMSd85VlEJdKhLqLqB0"
                }
            };

            if (auth.set(user)) {

                if (target) { $window.location.href = target; } else { $window.location.reload(); }
            }
        },

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

