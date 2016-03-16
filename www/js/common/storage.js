(function() {
'use strict';

angular.module('storage', [
  'storage'
])
.service('StorageSrvc', function ($rootScope) {

	return{

		setItem: function (clave, valor){

			window.localStorage.setItem(clave, JSON.stringify(valor));
		},

		getItem : function (clave){

			return JSON.parse(window.localStorage.getItem(clave));
		},

		deleteItem : function (clave){
			window.localStorage.removeItem(clave);
		}

	};
});
})();