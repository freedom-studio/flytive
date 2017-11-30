/// <reference path="../_all.ts" />

module FlytiveApp {
  
  export interface IPackageService {
    loadAllPackages(): ng.IPromise<Package[]>;
    selectedPackage: Package;
  }
  
  export class PackageService implements IPackageService {

    static $inject = ['$http'];

    constructor(private $http: ng.IHttpService) {
        this.httpService = $http;
    }

    httpService: ng.IHttpService;
    promise: ng.IPromise<void>;

    loadAllPackages(): ng.IPromise<Package[]> {          
        return this.httpService.get('http://api.flytive.com/api/packages/50;20')
                   .then(response => response.data as Package[]);
    }

    selectedPackage: Package = null;   
  }
}