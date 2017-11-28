/// <reference path="../_all.ts" />

module FlytiveApp {
  export class MainController {
    static $inject = [
      'packageService', 
      'datesService', 
      'NgMap', 
      '$mdSidenav', 
      '$mdToast', 
      '$mdDialog', 
      '$mdMedia',
      '$mdBottomSheet'];
    
    constructor(
      private packageService: IPackageService,
      private datesService: IDatesService,
      private NgMap,
      private $mdSidenav: angular.material.ISidenavService,
      private $mdToast: angular.material.IToastService,
      private $mdDialog: angular.material.IDialogService,
      private $mdMedia: angular.material.IMedia,
      private $mdBottomSheet: angular.material.IBottomSheetService) {
      var self = this;
        
      this.packageService
        .loadAllPackages()
        .then((packages: Package[]) => {
          self.assignScoreRange(packages);
          self.packages = packages;
          self.selected = packages[0];
          self.packageService.selectedPackage = self.selected;
          self.maxPriceTotal = Math.max.apply(Math, self.packages.map(function(o){return o.price;}));
          self.maxPrice = Math.max.apply(Math, self.packages.map(function(o){return o.price;}));
        });

        this.datesService
        .loadDates()
        .then((dates: Date[]) => {
          self.dates = dates;
        });

        NgMap.getMap("map").then(function(map) {
         
        });
    }

    packages: Package[] = [];
    dates: Date[] = [];
    selected: Package = null;
    maxDistanceByLand: number = 1000;
    maxPriceTotal: number = null;
    maxPrice: number = null;

    minOutboundDate: string;
    maxOutboundDate: string;

    startLocation: string = "Kraków";

    currentNavItem: string = 'main-content';

    assignScoreRange(packages: Package[]): void {
      for (let pkg of packages) {
        if (pkg.userScore <= 50) {
          pkg.scoreRange = "score-a";
        } else if (pkg.userScore <= 75) {
          pkg.scoreRange = "score-b";
        } else {
          pkg.scoreRange = "score-c";
        }
     }
    }
    
    goto (page: string): void {
      this.currentNavItem = page;     
    }

    toggleSideNav() : void {
      this.$mdSidenav('left').toggle();
    }
    
    selectPackage (pkg: Package) : void {
      this.selected = pkg;
      this.packageService.selectedPackage = pkg;
      
      var sidenav = this.$mdSidenav('left');
      if (sidenav.isOpen()) {
        sidenav.close();
      }

    }
    
    showDates($event) {


    this.minOutboundDate = this.dates[0].outboundDate;
    this.maxOutboundDate = this.dates[this.dates.length - 1].outboundDate;

      this.$mdBottomSheet.show({
        parent: angular.element(document.getElementById('wrapper')),
        templateUrl: './dist/view/contactSheet.html',
        controller: ContactPanelController,
        controllerAs: "cp",
        bindToController : true,
        targetEvent: $event
      }).then((clickedItem) => {
        clickedItem && console.log( clickedItem.name + ' clicked!');
      })      
    }

   
    
   
    
    formScope: any;
    
    setFormScope(scope) {
      this.formScope = scope;
    }
    
   
    
   
    
    openToast(message: string): void {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(message)
          .position('top right')
          .hideDelay(3000)
      );
    }

    
  }
}