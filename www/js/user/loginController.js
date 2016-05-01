(function() {
'use strict';

angular.module('login.controller', ['login.controller'])

.controller('LoginCtrl',['$rootScope', '$scope', '$state', 'LoginSrvc', 'StorageSrvc', '$translate', 
	function ($rootScope, $scope, $state, LoginSrvc, StorageSrvc, $translate) {

	$scope.login = {
		username : "",
		password : ""
	};

     
	$scope.userLogin = function(){
		
		var data = {
			client_id : $rootScope.client_id,
			client_secret : $rootScope.client_secret,
			username : $scope.login.username,
			password : $scope.login.password
		};

		console.log("Login");
		LoginSrvc.login(data, function (){
			console.log("SUCCESS");
			//TODO : save user data
			StorageSrvc.setItem('user', data);

			//TODO : use Ionic components
			//alert($translate.instant('error_success'));

			$scope.closeLogin();
			$state.go('app.account', {});

		}, function (error){
			console.log("ERROR");
			alert(error);
		});
	};

	$scope.facebookCallback = function(success){
    	if(success.status === 'connected'){
	        // The user is logged in and has authenticated your app, and response.authResponse supplies
	        // the user's ID, a valid access token, a signed request, and the time the access token
	        // and signed request each expire
	        console.log('getLoginStatus', success.status);

    		// Check if we have our user saved
    		var user = UserService.getUser('facebook');

    		if(!user.userID){
				getFacebookProfileInfo(success.authResponse)
				.then(function(profileInfo) {
					// For the purpose of this example I will store user data on local storage
					UserService.setUser({
						authResponse: success.authResponse,
						userID: profileInfo.id,
						name: profileInfo.name,
						email: profileInfo.email,
						picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
					});

					$state.go('app.home');
				}, function(fail){
					// Fail get profile info
					console.log('profile info fail', fail);
				});
			}else{
				$state.go('app.home');
			}
      	} else {
        	// If (success.status === 'not_authorized') the user is logged in to Facebook,
				// but has not authenticated your app
        	// Else the person is not logged into Facebook,
				// so we're not sure if they are logged into this app or not.

			console.log('getLoginStatus', success.status);
			// Ask the permissions you need. You can learn more about
			// FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
    		facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
    	}
    }

	$scope.facebookLogin = function(){
		console.log("Facebook login!");
		facebookConnectPlugin.getLoginStatus($scope.facebookCallback);	
	};


	$scope.twitterLogin = function(){
		
		console.log("Twitter login!");
	};

	$scope.register = function(){
	
		console.log("Register!");	
		var data = {
			client_id : $rootScope.client_id,
			client_secret : $rootScope.client_secret,
			username : $scope.login.username,
			password : $scope.login.password
		};

		LoginSrvc.register(data, function (result){

			//TODO : use Ionic components
			alert($translate.instant('error_success'));
			userLogin();
			$state.go('app.search', {});

		}, function (error){	
			alert($translate.instant(error));
		});
	};

}]);
})();