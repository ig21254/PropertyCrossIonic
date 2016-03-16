angular.module('starter.controllers', ['starter.controllers'])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });

  // Create the account modal that we will use later
  $ionicModal.fromTemplateUrl('templates/account.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAccount = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Triggered in the Account modal to close it
  $scope.closeAccount = function() {
    $scope.modalAccount.hide();
  };

  // Open the login modal
  $scope.login = function() {
    if ($rootScope.token == null) {
      $scope.modalLogin.show();
    } else {
      $scope.modalAccount.show();
    }
  };
});
