/// <reference path="_all.ts" />

module FlytiveApp {
  
  angular.module('flytiveApp', ['ngMaterial', 'ngMdIcons', 'ngMessages', 'ngMap'])
    .service('packageService', PackageService)
    .service('datesService', DatesService)
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
             $mdThemingProvider: angular.material.IThemingProvider) => {
      $mdIconProvider
        .icon("true"      , "./assets/svg/return.svg")
        .icon("false"      , "./assets/svg/oneway.svg")
        .icon('menu',        './assets/svg/menu.svg'        , 24);
        
      $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .accentPalette('indigo');
    });
    
}