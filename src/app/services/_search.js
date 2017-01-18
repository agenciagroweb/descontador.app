app.factory('_search', [
    '$rootScope',
    '$http', function($rootScope, $http) {

    var service = "search";
    var factory = {};

    factory.data = function(params) {

        if ( ! _.isEmpty(params.q))
            return true;

        return false;
    };

    return factory;

}]);