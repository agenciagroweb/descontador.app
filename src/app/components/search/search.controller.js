app.controller('search.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Search");

    var base = angular.element(".search");

    $scope.filters = {

        toggle : function() {

            var $elem = base.find(".filters");

            if ($elem.css("display") === "none") {
                $elem.css("display", "block");
            } else {
                $elem.css("display", "none");
            }
        }
    };

    $scope.feedback = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/search/search.feedback.html",
                controller: "search.feedback.controller",
                modalClass: "feedback-modal"
            });
        }
    };

}]);

