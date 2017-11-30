/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var PackageService = /** @class */ (function () {
        function PackageService($http) {
            this.$http = $http;
            this.selectedPackage = null;
            this.httpService = $http;
        }
        PackageService.prototype.loadAllPackages = function () {
            return this.httpService.get('http://api.flytive.com/api/packages/50;20')
                .then(function (response) { return response.data; });
        };
        PackageService.$inject = ['$http'];
        return PackageService;
    }());
    FlytiveApp.PackageService = PackageService;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=packageService.js.map