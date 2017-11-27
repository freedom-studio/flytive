/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var AddUserDialogController = /** @class */ (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'svg-1', 'svg-2', 'svg-3', 'svg-4'
            ];
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    }());
    FlytiveApp.AddUserDialogController = AddUserDialogController;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=addUserDialogController.js.map