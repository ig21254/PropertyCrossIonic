(function() {
'use strict';

angular.module('storage', [
  'storage'
])
.service('StorageSrvc', function ($rootScope) {

	var setUser = function(user_data) {
	    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
	};

	var getUser = function(){
	    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
	};

	return{

		setItem: function (clave, valor){

			window.localStorage.setItem(clave, JSON.stringify(valor));
		},

		getItem : function (clave){

			return JSON.parse(window.localStorage.getItem(clave));
		},

		deleteItem : function (clave){
			window.localStorage.removeItem(clave);
		},

		getUser: getUser,
	    setUser: setUser

	};
});
})();