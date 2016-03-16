(function() {
'use strict';

angular.module('login.service', [
  'login.service'
])
.service('LoginSrvc', function ($rootScope, $http, $q, $cordovaNetwork, UtilSrvc) {

  //TODO : implement all WS request

	return {

    // http POST https://push.opentrends.net:8100/mdpa/api/oauth/token 
    // grant_type=password 
    // client_id=android 
    // client_secret=SomeRandomCharsAndNumbers 
    // username="hola.caracola@gmail.com" 
    //password="h0lAcarac0l$1"
		login: function (data, success, errror){

        var url = $rootScope.endPoint + "oauth/token";
        var headers = null;
        data.grant_type="password";
        

        UtilSrvc.rest("POST", url, headers, data).then(function (result){
          console.log(result);
          $rootScope.token = result.access_token;
          console.log($rootScope.token);
        },function (err){
          console.log(err);
        });
		}	
	};
});
})();