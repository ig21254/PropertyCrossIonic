(function() {
'use strict';

angular.module('search.service', [
  'search.service'
])
.service('SearchSrvc', function ($rootScope, $http, $q) {
  // Might use a resource here that returns a JSON array

  return {

     // http POST 
     // https://push.opentrends.net:8100/mdpa/api/propiedad/buscar  
     // alquiler=true 
     // venta=true 
     // ciudad="barcelona" 
     // cp="08080" 
     // direccion="venezuela 105, planta 1" 
     
     //  TODO : provide REST service 
    getProperties: function(data) {
        
        var deferred = $q.defer();

        var url = "propiedad/buscar";

        var header = {
        };

         $http({method: 'POST', url: url, data: data}).then(function (data) {  
            //deferred.resolve(data); 
            deferred.resolve(properties);
        },function (err){
            //deferred.reject(err); 
            deferred.reject(properties); 
        });

        return deferred.promise; 
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
    }
  };
});
})();
