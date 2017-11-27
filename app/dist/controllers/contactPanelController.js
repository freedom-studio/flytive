/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var ContactPanelController = /** @class */ (function () {
        function ContactPanelController(packageService, $mdBottomSheet) {
            this.packageService = packageService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' }
            ];
            this.user = packageService.selectedPackage;
        }
        ContactPanelController.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        ContactPanelController.$inject = ['packageService', '$mdBottomSheet'];
        return ContactPanelController;
    }());
    FlytiveApp.ContactPanelController = ContactPanelController;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=contactPanelController.js.map