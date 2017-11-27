/// <reference path="../_all.ts" />

module FlytiveApp {
  
  export interface IPackageService {
    loadAllPackages(): ng.IPromise<Package[]>;
    selectedPackage: Package;
  }
  
  export class PackageService implements IPackageService {

    static $inject = ['$q'];
    
    constructor(private $q: ng.IQService) {      
    }

    selectedPackage: Package = null;
    
    loadAllPackages() : ng.IPromise<Package[]> {
        return this.$q.when(this.packages);
    }


    
    private packages: Package[] = [
        {
            "id": 2303,
            "destination": "Ovda",
            "destCoords": "29.94,34.94",
            "origin": "Kraków",
            "isReturn": true,
            "price": 95,
            "userScore": 19,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(4)(10)",
            "isWeekend": false
        },
        {
            "id": 2293,
            "destination": "Agadir",
            "destCoords": "30.38,-9.55",
            "origin": "Katowice",
            "isReturn": false,
            "price": 107,
            "userScore": 37,
            "isOnOneTicket": true,
            "landDistance": 83,
            "regionIds": "(12)(20)",
            "isWeekend": false
        },
        {
            "id": 2350,
            "destination": "Brussels Charleroi",
            "destCoords": "50.46,4.45",
            "origin": "Kraków",
            "isReturn": true,
            "price": 78,
            "userScore": 38,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(18)(19)",
            "isWeekend": true
        },
        {
            "id": 2297,
            "destination": "Marrakesh",
            "destCoords": "31.61,-8.04",
            "origin": "Kraków",
            "isReturn": false,
            "price": 124,
            "userScore": 41,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(12)(20)",
            "isWeekend": false
        },
        {
            "id": 2308,
            "destination": "Dubai",
            "destCoords": "24.55,55.10",
            "origin": "Katowice",
            "isReturn": false,
            "price": 166,
            "userScore": 44,
            "isOnOneTicket": true,
            "landDistance": 83,
            "regionIds": "(4)(10)(20)",
            "isWeekend": false
        },
        {
            "id": 2299,
            "destination": "Fuerteventura",
            "destCoords": "28.45,-13.86",
            "origin": "Warszawa Modlin",
            "isReturn": false,
            "price": 123,
            "userScore": 47,
            "isOnOneTicket": true,
            "landDistance": 276,
            "regionIds": "(1)(11)",
            "isWeekend": false
        },
        {
            "id": 2291,
            "destination": "Ovda",
            "destCoords": "29.94,34.94",
            "origin": "Poznań",
            "isReturn": true,
            "price": 122,
            "userScore": 51,
            "isOnOneTicket": true,
            "landDistance": 348,
            "regionIds": "(4)(10)",
            "isWeekend": false
        },
        {
            "id": 2301,
            "destination": "Marrakesh",
            "destCoords": "31.61,-8.04",
            "origin": "Kraków",
            "isReturn": true,
            "price": 334,
            "userScore": 55,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(12)(20)",
            "isWeekend": false
        },
        {
            "id": 2282,
            "destination": "Sandefjord",
            "destCoords": "59.19,10.26",
            "origin": "Kraków",
            "isReturn": true,
            "price": 126,
            "userScore": 55,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(16)(19)",
            "isWeekend": false
        },
        {
            "id": 2327,
            "destination": "Tel-Aviv",
            "destCoords": "32.01,34.89",
            "origin": "Kraków",
            "isReturn": true,
            "price": 254,
            "userScore": 55,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(4)(10)",
            "isWeekend": false
        },
        {
            "id": 2288,
            "destination": "Reykjavik",
            "destCoords": "63.99,-22.61",
            "origin": "Wrocław",
            "isReturn": true,
            "price": 238,
            "userScore": 57,
            "isOnOneTicket": true,
            "landDistance": 251,
            "regionIds": "(1)(16)(19)",
            "isWeekend": false
        },
        {
            "id": 2300,
            "destination": "Gran Canaria",
            "destCoords": "27.93,-15.39",
            "origin": "Kraków",
            "isReturn": true,
            "price": 460,
            "userScore": 60,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(11)",
            "isWeekend": false
        },
        {
            "id": 2342,
            "destination": "Marseille",
            "destCoords": "43.44,5.21",
            "origin": "Kraków",
            "isReturn": true,
            "price": 160,
            "userScore": 62,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(17)(19)",
            "isWeekend": false
        },
        {
            "id": 2279,
            "destination": "Milan",
            "destCoords": "45.63,8.73",
            "origin": "Katowice",
            "isReturn": true,
            "price": 105,
            "userScore": 71,
            "isOnOneTicket": true,
            "landDistance": 83,
            "regionIds": "(1)(14)(17)(19)",
            "isWeekend": false
        },
        {
            "id": 2289,
            "destination": "Tenerife South",
            "destCoords": "28.04,-16.57",
            "origin": "Kraków",
            "isReturn": true,
            "price": 608,
            "userScore": 78,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(11)",
            "isWeekend": false
        },
        {
            "id": 2363,
            "destination": "Sandefjord",
            "destCoords": "59.19,10.26",
            "origin": "Warszawa Modlin",
            "isReturn": true,
            "price": 79,
            "userScore": 79,
            "isOnOneTicket": true,
            "landDistance": 276,
            "regionIds": "(1)(16)(19)",
            "isWeekend": true
        },
        {
            "id": 2349,
            "destination": "Paris Beauvais",
            "destCoords": "49.45,2.11",
            "origin": "Kraków",
            "isReturn": true,
            "price": 200,
            "userScore": 80,
            "isOnOneTicket": true,
            "landDistance": 18,
            "regionIds": "(1)(18)(19)",
            "isWeekend": true
        },
        {
            "id": 2310,
            "destination": "Auckland",
            "destCoords": "-37.01,174.79",
            "origin": "Stockholm",
            "isReturn": true,
            "price": 2430,
            "userScore": 81,
            "isOnOneTicket": true,
            "landDistance": 1081,
            "regionIds": "(21)",
            "isWeekend": false
        },
        {
            "id": 2332,
            "destination": "Melbourne",
            "destCoords": "-37.67,144.84",
            "origin": "Berlin Tegel",
            "isReturn": true,
            "price": 2367,
            "userScore": 83,
            "isOnOneTicket": true,
            "landDistance": 546,
            "regionIds": "(21)",
            "isWeekend": false
        },
        {
            "id": 2331,
            "destination": "Sydney",
            "destCoords": "-33.95,151.18",
            "origin": "Berlin Tegel",
            "isReturn": true,
            "price": 2410,
            "userScore": 83,
            "isOnOneTicket": true,
            "landDistance": 546,
            "regionIds": "(21)",
            "isWeekend": false
        },
        {
            "id": 2330,
            "destination": "Los Angeles",
            "destCoords": "33.94,-118.41",
            "origin": "Stockholm",
            "isReturn": true,
            "price": 1245,
            "userScore": 85,
            "isOnOneTicket": true,
            "landDistance": 1081,
            "regionIds": "(9)",
            "isWeekend": false
        },
        {
            "id": 2276,
            "destination": "Okinawa",
            "destCoords": "26.20,127.65",
            "origin": "Prague",
            "isReturn": true,
            "price": 1443,
            "userScore": 89,
            "isOnOneTicket": true,
            "landDistance": 409,
            "regionIds": "(4)",
            "isWeekend": false
        },
        {
            "id": 2324,
            "destination": "Agadir",
            "destCoords": "30.38,-9.55",
            "origin": "Budapest",
            "isReturn": true,
            "price": 494,
            "userScore": 92,
            "isOnOneTicket": true,
            "landDistance": 289,
            "regionIds": "(12)(20)",
            "isWeekend": false
        },
        {
            "id": 2341,
            "destination": "Manila",
            "destCoords": "14.51,121.02",
            "origin": "Frankfurt",
            "isReturn": true,
            "price": 1505,
            "userScore": 96,
            "isOnOneTicket": true,
            "landDistance": 818,
            "regionIds": "(3)(4)",
            "isWeekend": false
        }
    ];
  }
}