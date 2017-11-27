/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var MainController = /** @class */ (function () {
        function MainController(packageService, datesService, NgMap, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.packageService = packageService;
            this.datesService = datesService;
            this.NgMap = NgMap;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.packages = [];
            this.dates = [];
            this.selected = null;
            this.maxDistanceByLand = 1000;
            this.maxPriceTotal = null;
            this.maxPrice = null;
            this.currentNavItem = 'main-content';
            var self = this;
            this.packageService
                .loadAllPackages()
                .then(function (packages) {
                self.assignScoreRange(packages);
                self.packages = packages;
                self.selected = packages[0];
                self.packageService.selectedPackage = self.selected;
                self.maxPriceTotal = Math.max.apply(Math, self.packages.map(function (o) { return o.price; }));
                self.maxPrice = Math.max.apply(Math, self.packages.map(function (o) { return o.price; }));
            });
            this.datesService
                .loadDates()
                .then(function (dates) {
                self.dates = dates;
            });
            NgMap.getMap("map").then(function (map) {
            });
        }
        MainController.prototype.assignScoreRange = function (packages) {
            for (var _i = 0, packages_1 = packages; _i < packages_1.length; _i++) {
                var pkg = packages_1[_i];
                if (pkg.userScore <= 50) {
                    pkg.scoreRange = "score-a";
                }
                else if (pkg.userScore <= 75) {
                    pkg.scoreRange = "score-b";
                }
                else {
                    pkg.scoreRange = "score-c";
                }
            }
        };
        MainController.prototype.goto = function (page) {
            this.currentNavItem = page;
        };
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectPackage = function (pkg) {
            this.selected = pkg;
            this.packageService.selectedPackage = pkg;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.prototype.showDates = function ($event) {
            this.minOutboundDate = this.dates[0].outboundDate;
            this.maxOutboundDate = this.dates[this.dates.length - 1].outboundDate;
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',
                controller: FlytiveApp.ContactPanelController,
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + ' clicked!');
            });
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = [
            'packageService',
            'datesService',
            'NgMap',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'
        ];
        return MainController;
    }());
    FlytiveApp.MainController = MainController;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=mainController.js.map