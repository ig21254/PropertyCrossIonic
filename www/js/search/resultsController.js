(function() {
'use strict';

angular.module('results.controller', [
	'results.controller'
])
.controller('ResultsCtrl',['$rootScope', '$scope', '$state', '$timeout', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, $timeout, SearchSrvc, UtilSrvc) {

	/*$scope.datos = [
		{
            alquiler: true, 
            favorito: false, 
            idPropiedad: "id-propiedad-X", 
            latitud: 41.412479, 
            longitud: 2.210537, 
            metros: 69.5, 
            precio: 30000.25, 
            titulo: "Castillejos 314", 
            venta: false
        }, 
        {
            alquiler: false, 
            favorito: false, 
            idPropiedad: "id-propiedad-T", 
            latitud: 41.412479, 
            longitud: 2.210534, 
            metros: 59.5, 
            precio: 30000.25, 
            titulo: "Castillejos 394", 
            venta: true
        },
        {
            alquiler: true, 
            favorito: false, 
            idPropiedad: "id-propiedad-X", 
            latitud: 41.412479, 
            longitud: 2.210537, 
            metros: 69.5, 
            precio: 30000.25, 
            titulo: "Castillejos 314", 
            venta: false
        }, 
        {
            alquiler: false, 
            favorito: false, 
            idPropiedad: "id-propiedad-T", 
            latitud: 41.412479, 
            longitud: 2.210534, 
            metros: 59.5, 
            precio: 30000.25, 
            titulo: "Castillejos 394", 
            venta: true
        }];*/

    //console.log($scope.datos);
    $scope.datos = [];

    /*$scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };*/

    $scope.$on('UPDATE_SEARCH', function(event, response) {
        $scope.$apply(function(){
            $scope.datos = response;    
            console.log($scope.datos);
        })
    });
    
	$scope.criterio = {
        alquiler: true, 
        latitud: 41.412479, 
        longitud: 2.210537, 
        venta: true
    };

    $scope.isSale = function (property){
        return property.venta;
    };

    $scope.getFlatImage = function(){
        return UtilSrvc.getImage();
    }

    $scope.viewDetails = function(property) {
        $state.go('app.details');
        $rootScope.$broadcast('VIEW_DETAILS', property);
    }
}]);
})();