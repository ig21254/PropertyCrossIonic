(function() {
'use strict';

angular.module('details.controller', [
	'details.controller'
])
.controller('DetailsCtrl',['$rootScope', '$scope', '$state', '$filter', '$timeout', 'SearchSrvc', 'UtilSrvc', 'StorageSrvc', 
    function ($rootScope, $scope, $state, $filter, $timeout, SearchSrvc, UtilSrvc, StorageSrvc) {

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

    $scope.comment = {
            autor: "Annonymous", 
            fecha: 1445430985947, 
            texto: ""
        }

    $scope.$on('VIEW_DETAILS', function(event, response) {

        $scope.$apply(function(){
            $scope.details.alquiler = response.alquiler;
            $scope.details.favorito = response.favorito;
            $scope.details.idPropiedad = response.idPropiedad; 
            $scope.details.latitud = response.latitud;
            $scope.details.longitud = response.longitud;
            $scope.details.metros = response.metros;
            $scope.details.precio = response.precio;
            $scope.details.titulo = response.titulo; 
            $scope.details.venta = response.venta;
            console.log($scope.details);

            $scope.init();
        });
    });

    $scope.getFlatImage = function(){
        return UtilSrvc.getImage();
    }

    $scope.parseDate = function(date) {
        var d = new Date(date);
        return d.toUTCString();
    }

    $scope.isRent = function (){
        return $scope.details.alquiler;
    };

    $scope.addComment = function(){
        var comment = {fecha: new Date, autor: "Annonymous", texto: $scope.comment.texto};
        $scope.comments.push(comment);
        $scope.comment.texto = "";
    }

    $scope.addFavorite = function() {
        var favorites = StorageSrvc.getItem('favorites');
        if (!favorites) {
            favorites = [$scope.details];
        } else {
            favorites.push($scope.details);
        }
        //console.log(favorites);
        $scope.details.favorito = true;
        StorageSrvc.setItem('favorites', favorites);
    }

    $scope.removeFavorite = function() {
        var favorites = StorageSrvc.getItem('favorites');
        if (!favorites) {
            favorites = [];
        } else {
            var index = findWithAttr(favorites, 'idPropiedad', $scope.details.idPropiedad);
            console.log("Index: "+index);
            favorites.splice(index, 1);
        }
        $scope.details.favorito = false;
        StorageSrvc.setItem('favorites', favorites);
    }

    $scope.init = function() {
        var favorites = StorageSrvc.getItem('favorites');
        if (!favorites) {
            console.log("NOT FAVORITE");
            $scope.details.favorito = false;
        } else {
            if($filter('filter')(favorites, {idPropiedad: $scope.details.idPropiedad})[0]) {
                console.log("FAVORITE");
                $scope.details.favorito = true;
            } else {
                console.log("NOT FAVORITE");
                $scope.details.favorito = false;
            }
        }
    }

    function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
    }
    

}]);
})();