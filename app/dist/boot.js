/// <reference path="_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    angular.module('flytiveApp', ['ngMaterial', 'ngMdIcons', 'ngMessages', 'ngMap'])
        .service('packageService', FlytiveApp.PackageService)
        .service('datesService', FlytiveApp.DatesService)
        .controller('mainController', FlytiveApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .icon("true", "./assets/svg/return.svg")
            .icon("false", "./assets/svg/oneway.svg")
            .icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('indigo');
    });
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=boot.js.map