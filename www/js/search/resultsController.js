(function() {
'use strict';

angular.module('results.controller', [
	'results.controller'
])
.controller('ResultsCtrl',['$rootScope', '$scope', '$state', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, SearchSrvc, UtilSrvc) {

	$scope.datos = [
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
        }];

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
        var value = Math.floor((Math.random() * 10) % 4 + 1);
        console.log("flat_sample_image_"+value+".png");
        return "flat_sample_image_"+value+".png";
    }

    $scope.viewDetails = function(property) {
        $state.go('app.details');
    }

	
}]);
})();