(function () {

    angular.module('JSCrowdSession').config(routesConfigFn);

    routesConfigFn.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routesConfigFn($stateProvider, $urlRouterProvider) {
        $stateProvider.state('catalog', {
            url: '/catalog',
            templateUrl: 'app/modules/public/catalog/template.html',
            controller: 'CatalogController',
            resolve: {
                resCategories: ['catalogService', function (catalogService) {
                    return catalogService.getCategories();
                }],
                resProducts: ['catalogService', function (catalogService) {
                    return catalogService.getProducts();
                }]
            }
        });
        $urlRouterProvider.otherwise('/catalog');
    }

})();
