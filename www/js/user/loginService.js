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
    // password="h0lAcarac0l$1"
		login: function (data, success, error){

        var url = $rootScope.endPoint + "oauth/token";
        var headers = null;
        data.grant_type="password";
        
        // Bypass per poder fer alguna cosa. El servidor no permet fer connexions HTTP.
        if (!$rootScope.serverDown) {
          UtilSrvc.rest("POST", url, headers, data).then(function (result){
            console.log(result);
            $rootScope.token = result.access_token;
            console.log($rootScope.token);
            success();
          },function (err){
            console.log(err);
            error(err);
          });
        } else {
          console.log("SERVER_DOWN");
          $rootScope.token = "result.access_token";
          success();
        }
        
		},

    register: function (data, success, error){

        var url = $rootScope.endPoint + "register/signup";
        var headers = null;
      
        UtilSrvc.rest("POST", url, headers, data).then(function (result){
          console.log("Register OK");
          console.log(result);
        },function (err){
          console.log(err);
        });
    }

	};
});
})();