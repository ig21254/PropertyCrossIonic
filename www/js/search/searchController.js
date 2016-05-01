(function() {
'use strict';

angular.module('search.controller', ['search.controller'])

.controller('SearchCtrl',['$rootScope', '$scope', '$state', 'SearchSrvc', 'UtilSrvc', function ($rootScope, $scope, $state, SearchSrvc, UtilSrvc) {

	$scope.search = {
		location :  "",
		rent : false,
		sale: false
	};

	$scope.recentSearches = [
		/*{
			address: "Barcelona",
			results: 12
		},
		{
			address: "Castillejos 234, 08003",
			results: 5
		},
		{
			address: "Madrid",
			results: 0
		}*/];

	$scope.searchProperties = function(){

		var data = {	
			alquiler: 	$scope.search.rent,
			venta: 		$scope.search.sale,
			direccion: 	$scope.search.location
		};

		//TODO : get data from form
		// don't look on position 

		//console.log("Search");
		SearchSrvc.searchProperties(data).then(function (response){
			var search = {address: $scope.search.location, results: response.data.datos.length};
			$scope.recentSearches.push(search);
			//console.log(response);

			$state.go('app.results');
			$rootScope.$broadcast('UPDATE_SEARCH', response.data.datos);
		},function (error){
			//TODO :  translate errors
			//UtilSrvc.showMsg(error.data);
		});
	};

	$scope.geoLocalizeSearch = function() {
		console.log("HOLA");
	}

}]);
})();