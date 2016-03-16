(function() {
'use strict';

angular.module('account.controller', [
	'account.controller'
]).controller('AccountCtrl',['$rootScope', '$scope', '$state', 'StorageSrvc', function ($rootScope, $scope, $state, StorageSrvc) {

	//TODO : implement photo getter from Cordova (optional)
	// register method with data from form

	$scope.removeUser = function(){
		StorageSrvc.deleteItem('user');
		$state.go('login',{});
	};

	$scope.init= function(){

		if (StorageSrvc.getItem('user') ){
			$scope.user = StorageSrvc.getItem('user');
		}else{
			$state.go('login',{});
		}
	};
	$scope.init();

}]);
})();