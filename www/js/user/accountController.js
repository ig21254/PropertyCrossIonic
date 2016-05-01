(function() {
'use strict';

angular.module('account.controller', [
	'account.controller'
]).controller('AccountCtrl',['$rootScope', '$scope', '$state', 'StorageSrvc', function ($rootScope, $scope, $state, StorageSrvc) {

	//TODO : implement photo getter from Cordova (optional)
	// register method with data from form

	$scope.user = {
		username: "",
		password: "",
		email: "",
		firstname: "",
		lastname: ""
	}

	$scope.logout = function(){
		StorageSrvc.deleteItem('user');
		StorageSrvc.deleteItem('user_profile');
		$state.go('app.search', {});
	};

	$scope.saveInfo = function(){
		StorageSrvc.setItem('user_profile', $scope.user);
	};

	$scope.init = function(){
		var user = StorageSrvc.getItem('user');
		if (user){
			if (StorageSrvc.getItem('user_profile')) {
				$scope.user = StorageSrvc.getItem('user_profile');
			} else {
				$scope.user.username = user.username;
				$scope.user.password = user.password;	
			}
		}else{
			$state.go('app.search', {});
		}
	};
	$scope.init();

}]);
})();