/// <reference path="../_all.ts" />

module FlytiveApp {
  
  export class ContactPanelController {    
    static $inject = ['packageService', '$mdBottomSheet'];
    
    constructor(
      private packageService: IPackageService, 
      private $mdBottomSheet) {
      this.user = packageService.selectedPackage;
    }
  
    user: Package;
    
    actions = [
      { name: 'Phone'       , icon: 'phone' },
      { name: 'Twitter'     , icon: 'twitter' },
      { name: 'Google+'     , icon: 'google_plus' },
      { name: 'Hangout'     , icon: 'hangouts' }
    ];
    
    submitContact(action): void {
      this.$mdBottomSheet.hide(action);
    }
       
  }
}