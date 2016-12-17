(function () {

    angular.module('JSCrowdSession').factory('catalogService', catalogService);

    catalogService.$inject = ['$http'];

    function catalogService($http) {

        var DEMO_URL = 'http://localhost:3001/api';

        return {
            getCategories: function () {
                return $http({ method: 'GET', url: DEMO_URL + '/categories' })
            },
            getProducts: function () {
                return $http({ method: 'GET', url: DEMO_URL + '/products' })
            }
        };
    }

})();
