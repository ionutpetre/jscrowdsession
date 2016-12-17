(function () {

    angular.module('JSCrowdSession').controller('CatalogController', CatalogController);

    CatalogController.$inject = ['resCategories', 'resProducts', '$scope'];

    function CatalogController(resCategories, resProducts, $scope) {

        $scope.categories = resCategories.data;
        $scope.products = resProducts.data;

        $scope.selectedOrder = '';
        $scope.selectedCategory = '';

        $scope.resetFilters = function () {
            $scope.selectedOrder = '';
            $scope.selectedCategory = '';
        }

        $scope.selectCategory = function (category) {
            $scope.selectedCategory = category;
        }

        $scope.filterProductsByCategs = function () {
            return function (product) {
                if (!$scope.selectedCategory) { return true; }
                return ($scope.selectedCategory == product.category);
            };
        }

        $scope.openNav = function () {
            document.getElementById("myTopnav").style.marginLeft = "250px";
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("mySection").style.marginLeft = "250px";
        }

        $scope.closeNav = function () {
            document.getElementById("myTopnav").style.marginLeft = "0";
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySection").style.marginLeft = "0";
        }
    }

})();
