(function() {
'use strict';

angular.module('details.controller', [
	'details.controller'
])
.controller('DetailsCtrl',['$rootScope', '$scope', '$state', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, SearchSrvc, UtilSrvc) {

	$scope.details = {
        alquiler: false, 
        anteriorConsulta: 1448022985947, 
        ciudad: "Barcelona", 
        cp: "08080", 
        descripcion: "Amplio piso en venta totalmente reformado de 110 m2 y 3 habitaciones, en una de las mejores zonas del Eixample Esquerra de Barcelona. Se trata de una finca clásica rehabilitada del año 1925 en perfecto estado de conversación y con ascensor.\nHemos planteado un proyecto cambiando la distribución actual para obtener espacios más amplios y luminosos, de esta manera, hemos conseguido una vivienda de 3 dormitorios, una de ellas tipo suite con zona de vestidor, salón comedor totalmente independiente y amplia cocina office con zona de aguas y salida a galería. La vivienda está orientada a sur-oeste con vistas a la calle Diputació.", 
        direccion: "Venezuela 105, Planta 1", 
        emailPropietario: "juangt@gmail.com", 
        latitud: 41.412479, 
        longitud: 2.210537, 
        metros: 68.9, 
        precio: 310452.25, 
        telefonoPropietario: "933028414", 
        titulo: "Castillejos 314"
    };

    $scope.comments = [
        {
            autor: "Maria", 
            fecha: 1447158985947, 
            texto: "Lorem ipsum ...", 
        }, 
        {
            autor: "Paco", 
            fecha: 1446294985947, 
            texto: "Lorem ipsum ..."
        }, 
        {
            autor: "Arnau", 
            fecha: 1445430985947, 
            texto: "Lorem ipsum ..."
        }
    ];

    $scope.getFlatImage = function(){
        var value = Math.floor((Math.random() * 10) % 4 + 1);
        console.log("flat_sample_image_"+value+".png");
        return "flat_sample_image_"+value+".png";
    }

    $scope.parseDate = function(date) {
        var d = new Date(date);
        return d.toUTCString();
    }

    $scope.isRent = function (){
        return $scope.details.alquiler;
    };

	
}]);
})();