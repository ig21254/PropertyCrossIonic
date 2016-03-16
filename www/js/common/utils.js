(function() {
'use strict';

angular.module('util', [
  'util'
])
.service('UtilSrvc', function ($rootScope,  $ionicPopup, $q, $http, $cordovaSocialSharing, $cordovaNetwork) {


	return{
    //TODO : install Cordova Plugin
	shareProperty: function (data){
			
      var message = data.titulo;
			var subject = "";
			var file = "";
			var link = "";
      		// Share via native share sheet

			$cordovaSocialSharing.share(message, subject, file, link) 
    		.then(function(result) {

      			// Success!
			}, function(err) {
      			// An error occured. Show a message to the user
    		});

		},


    //TODO : config headers with token from login
		rest : function(method, endpoint, headers, data){

      		console.log(method, endpoint, headers, data);

			var deferred = $q.defer();

			//if ( $cordovaNetwork.isOnline() ){

			    $http({method: method, 
                 url: endpoint, 
                 data: data, 
                 headers: headers}).success(function (data) {

			        deferred.resolve(data);       

			      }).error(function (data, status, header, config){
			        var err = {
			          data : data,
			          status : status, 
			          header : header,
			          config : config
			        };

			        deferred.reject(err);           
			      });

			      return deferred.promise; 
			/*}else{
			   deferred.reject("not_connected");    
			  
			}*/

			return deferred.promise; 
		}
	};
});
})();