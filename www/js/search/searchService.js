(function() {
'use strict';

angular.module('search.service', [
  'search.service'
])
.service('SearchSrvc', function ($rootScope, $http, $q) {
  // Might use a resource here that returns a JSON array

  var properties = [];

  return {

     // http POST 
     // https://push.opentrends.net:8100/mdpa/api/propiedad/buscar  
     // alquiler=true 
     // venta=true 
     // ciudad="barcelona" 
     // cp="08080" 
     // direccion="venezuela 105, planta 1" 
     
     //  TODO : provide REST service 
    searchProperties: function(data) {
        
        var deferred = $q.defer();

        //var url = $rootScope.endPoint + "propiedad/buscar";

        //URL backup para cuando el servicio de OpenTrends no funciona.
        var url = "http://mdpa-android.getsandbox.com/propiedad/buscar/"

        var header = {
            Authorization: 'Bearer ' + $rootScope.token
        };

        return $http({ method: 'POST', 
                url: url, 
                data: data, 
                header: header
              });/*.then(function (data) {
                properties = data.data.datos;
                console.log(properties);
                deferred.resolve(data); 
                //deferred.resolve(properties);
              },function (err){
                deferred.reject(err); 
                //deferred.reject(properties); 
              });

        return deferred.promise; */
    },
    // http GET 
    // https://push.opentrends.net:8100/mdpa/api/propiedad/id-de-la-propiedad
    // Authorization:'Bearer ...'

    //  TODO : provide REST service 
    getPropertyDetails: function (id){

       var deferred = $q.defer();

       var url = $rootScope.endPoint + "propiedad/" + id;

       var data = {};

       $http({method: 'GET', url: url, data: data}).success(function (data) {  
           deferred.resolve(data);      
       })
       .error(function (data, status, header, config){
           var err = {
               data : data,
               status : status, 
               header : header,
               config : config
           };
           deferred.reject(err);          
       });

       return deferred.promise;        
    },

    getProperties: function() {
      return properties;
    }
  };
});
})();
