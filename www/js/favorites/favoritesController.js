(function() {
'use strict';

angular.module('favorites.controller', [
	'favorites.controller'
])
.controller('FavsCtrl',['$rootScope', '$scope', '$state', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, SearchSrvc, UtilSrvc) {

	$scope.favorites = [
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

	
}]);
})();