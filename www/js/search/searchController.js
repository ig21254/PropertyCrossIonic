(function() {
'use strict';

angular.module('search.controller', [
	'search.controller'
])
.controller('SearchCtrl',['$rootScope', '$scope', '$state', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, SearchSrvc, UtilSrvc) {

	$scope.search = {
		location :  "",
		price : 0
	};

	$scope.shareProperty = function (property){

		UtilSrvc.shareProperty(property).then(function (res){
			console.log(res);
		}, function(){});
	};

	$scope.getProperties = function(){

		var data = {};

		//TODO : get data from form
		// don't look on position 


		SearchSrvc.getProperties(data).then(function (response){
			//TODO : change 
			console.log(response);
			$scope.properties = response.datos;

			//TODO : redirect to result page
			//$state.go('tab.result');

		},function (error){

			//TODO :  translate errors
			UtilSrvc.showMsg(error.data);
		});
	};

	$scope.geoLocalizeSearch = function() {
		console.log("HOLA");
	}

}]);
})();