
angular.module('user', ['login.controller', 'account.controller', 'login.service']);
angular.module('search', ['search.controller', 'search.service', 'results.controller', 'details.controller']);
angular.module('starter', ['starter.controllers']);
angular.module('favorites', ['favorites.controller']);
angular.module('mdpa', 
[
'ionic',
'starter',
'user',
'search',
'favorites',
'storage',
'util',
'ngCordova',
'pascalprecht.translate'
])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    //GLOBAL VARIABLES
     $rootScope.logged = false;
     $rootScope.endPoint = "https://push.opentrends.net:8100/mdpa/api/";
     $rootScope.client_id = 'android';
     $rootScope.client_secret = "SomeRandomCharsAndNumbers"; 
     $rootScope.token = null;

     $rootScope.serverDown = true;

    //TODO  : set up FB connect component
    // check : http://ccoenraets.github.io/ionic-tutorial/ionic-facebook-integration.html
    // install in-app browser plugin
    //configure callbacks at FB APP
    //FB APP ID Global var

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.favorites', {
    url: '/favorites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favorites.html',
        controller: 'FavsCtrl'
      }
    }
  })  

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.results', {
    url: '/results',
    views: {
      'menuContent': {
        templateUrl: 'templates/searchResult.html',
        controller: 'ResultsCtrl'
      }
    }
  })

  .state('app.details', {
    url: '/details',
    views: {
      'menuContent': {
        templateUrl: 'templates/propertyDetails.html',
        controller: 'DetailsCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
})

//Language configuration
.config(['$translateProvider', function ($translateProvider, $rootScope) {
    // 2 files to download according to the language
    $translateProvider.useStaticFilesLoader({
        prefix: 'lib/translation/lang-',
        suffix: '.json'
    });

    var preferredLang = function() { 
        var supportedLang = ['es', 'en', 'ca'];
        var forSpanishLang = ['gl', 'eu'];
        var defaultLang = 'es';
        var currentLang = navigator.language;

        if (!currentLang) currentLang = '';
        currentLang = currentLang.substr(0, 2).toLowerCase();
        // To know if a lang is supported or not (supported = true OR false)
        var supported = supportedLang.indexOf(currentLang) > -1;
        var toSpanish = forSpanishLang.indexOf(currentLang) > -1;
        var lang = "";

        if (!lang && navigator) {
            if (navigator.language) {
                    lang = navigator.language;
            } else if (navigator.browserLanguage) {
                    lang = navigator.browserLanguage;
            } else if (navigator.systemLanguage) {
                    lang = navigator.systemLanguage;
            } else if (navigator.userLanguage) {
                    lang = navigator.userLanguage;
            }
            lang = lang.substr(0, 2);
        }

        var preferredLangKey;
        
        if (supported) { 
            preferredLangKey = currentLang;
        } 
        else if (!supported && toSpanish)  {
            preferredLangKey = 'es';
        }
        else {
            preferredLangKey = defaultLang;
        }

        if(lang !==""){
            preferredLangKey =  lang;
        }
        

        //Setting the app global language
        appLocale = preferredLangKey;
        return preferredLangKey;
    };
    
    $translateProvider.determinePreferredLanguage(function () {
        var preferredLangKey = preferredLang();

        return preferredLangKey;
    });

}]);
