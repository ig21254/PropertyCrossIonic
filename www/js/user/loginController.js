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
		LoginSrvc.login(data, function (result){

			//TODO : save user data
			StorageSrvc.setItem('user', data);

			//TODO : use Ionic components
			alert($translate.instant('error_success'));

			console.log("Go search");
			closeLogin();
			$state.go('app.search', {});

		}, function (error){	
			alert(error);
		});
	};


	$scope.facebookLogin = function(){
		
		console.log("Facebook login!");
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