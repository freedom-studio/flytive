/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var PackageService = /** @class */ (function () {
        function PackageService($q) {
            this.$q = $q;
            this.packages = [
                {
                    "id": 2303,
                    "destination": "Ovda",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 95,
                    "userScore": 26,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(4)(10)",
                    "isWeekend": false
                },
                {
                    "id": 2293,
                    "destination": "Agadir",
                    "origin": "Katowice",
                    "isReturn": false,
                    "price": 107,
                    "userScore": 36,
                    "isOnOneTicket": true,
                    "landDistance": 71,
                    "regionIds": "(12)(20)",
                    "isWeekend": false
                },
                {
                    "id": 2291,
                    "destination": "Ovda",
                    "origin": "Poznań",
                    "isReturn": true,
                    "price": 122,
                    "userScore": 38,
                    "isOnOneTicket": true,
                    "landDistance": 216,
                    "regionIds": "(4)(10)",
                    "isWeekend": false
                },
                {
                    "id": 2308,
                    "destination": "Dubai",
                    "origin": "Katowice",
                    "isReturn": false,
                    "price": 166,
                    "userScore": 42,
                    "isOnOneTicket": true,
                    "landDistance": 71,
                    "regionIds": "(4)(10)(20)",
                    "isWeekend": false
                },
                {
                    "id": 2299,
                    "destination": "Fuerteventura",
                    "origin": "Warszawa Modlin",
                    "isReturn": false,
                    "price": 123,
                    "userScore": 42,
                    "isOnOneTicket": true,
                    "landDistance": 181,
                    "regionIds": "(1)(11)",
                    "isWeekend": false
                },
                {
                    "id": 2297,
                    "destination": "Marrakesh",
                    "origin": "Kraków",
                    "isReturn": false,
                    "price": 124,
                    "userScore": 47,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(12)(20)",
                    "isWeekend": false
                },
                {
                    "id": 2288,
                    "destination": "Reykjavik",
                    "origin": "Wrocław",
                    "isReturn": true,
                    "price": 238,
                    "userScore": 53,
                    "isOnOneTicket": true,
                    "landDistance": 157,
                    "regionIds": "(1)(16)(19)",
                    "isWeekend": false
                },
                {
                    "id": 2301,
                    "destination": "Marrakesh",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 334,
                    "userScore": 61,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(12)(20)",
                    "isWeekend": false
                },
                {
                    "id": 2350,
                    "destination": "Brussels Charleroi",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 78,
                    "userScore": 61,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(1)(18)(19)",
                    "isWeekend": true
                },
                {
                    "id": 2327,
                    "destination": "Tel-Aviv",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 254,
                    "userScore": 61,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(4)(10)",
                    "isWeekend": false
                },
                {
                    "id": 2300,
                    "destination": "Gran Canaria",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 460,
                    "userScore": 65,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(1)(11)",
                    "isWeekend": false
                },
                {
                    "id": 2279,
                    "destination": "Milan",
                    "origin": "Katowice",
                    "isReturn": true,
                    "price": 105,
                    "userScore": 68,
                    "isOnOneTicket": true,
                    "landDistance": 71,
                    "regionIds": "(1)(14)(17)(19)",
                    "isWeekend": false
                },
                {
                    "id": 2363,
                    "destination": "Sandefjord",
                    "origin": "Warszawa Modlin",
                    "isReturn": true,
                    "price": 79,
                    "userScore": 71,
                    "isOnOneTicket": true,
                    "landDistance": 181,
                    "regionIds": "(1)(16)(19)",
                    "isWeekend": true
                },
                {
                    "id": 2342,
                    "destination": "Marseille",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 160,
                    "userScore": 77,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(1)(17)(19)",
                    "isWeekend": false
                },
                {
                    "id": 2310,
                    "destination": "Auckland",
                    "origin": "Stockholm",
                    "isReturn": true,
                    "price": 2430,
                    "userScore": 80,
                    "isOnOneTicket": true,
                    "landDistance": 952,
                    "regionIds": "(21)",
                    "isWeekend": false
                },
                {
                    "id": 2332,
                    "destination": "Melbourne",
                    "origin": "Berlin Tegel",
                    "isReturn": true,
                    "price": 2367,
                    "userScore": 81,
                    "isOnOneTicket": true,
                    "landDistance": 433,
                    "regionIds": "(21)",
                    "isWeekend": false
                },
                {
                    "id": 2331,
                    "destination": "Sydney",
                    "origin": "Berlin Tegel",
                    "isReturn": true,
                    "price": 2410,
                    "userScore": 82,
                    "isOnOneTicket": true,
                    "landDistance": 433,
                    "regionIds": "(21)",
                    "isWeekend": false
                },
                {
                    "id": 2282,
                    "destination": "Sandefjord",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 126,
                    "userScore": 82,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(1)(16)(19)",
                    "isWeekend": false
                },
                {
                    "id": 2289,
                    "destination": "Tenerife South",
                    "origin": "Kraków",
                    "isReturn": true,
                    "price": 608,
                    "userScore": 83,
                    "isOnOneTicket": true,
                    "landDistance": 122,
                    "regionIds": "(1)(11)",
                    "isWeekend": false
                },
                {
                    "id": 2330,
                    "destination": "Los Angeles",
                    "origin": "Stockholm",
                    "isReturn": true,
                    "price": 1245,
                    "userScore": 83,
                    "isOnOneTicket": true,
                    "landDistance": 952,
                    "regionIds": "(9)",
                    "isWeekend": false
                },
                {
                    "id": 2344,
                    "destination": "Rome Ciampino",
                    "origin": "Warszawa Modlin",
                    "isReturn": true,
                    "price": 130,
                    "userScore": 88,
                    "isOnOneTicket": true,
                    "landDistance": 181,
                    "regionIds": "(1)(17)(19)",
                    "isWeekend": true
                },
                {
                    "id": 2276,
                    "destination": "Okinawa",
                    "origin": "Prague",
                    "isReturn": true,
                    "price": 1443,
                    "userScore": 88,
                    "isOnOneTicket": true,
                    "landDistance": 362,
                    "regionIds": "(4)",
                    "isWeekend": false
                },
                {
                    "id": 2283,
                    "destination": "Sandefjord",
                    "origin": "Poznań",
                    "isReturn": true,
                    "price": 108,
                    "userScore": 91,
                    "isOnOneTicket": true,
                    "landDistance": 216,
                    "regionIds": "(1)(16)(19)",
                    "isWeekend": false
                },
                {
                    "id": 2341,
                    "destination": "Manila",
                    "origin": "Frankfurt",
                    "isReturn": true,
                    "price": 1505,
                    "userScore": 94,
                    "isOnOneTicket": true,
                    "landDistance": 758,
                    "regionIds": "(3)(4)",
                    "isWeekend": false
                },
                {
                    "id": 2345,
                    "destination": "Bologna",
                    "origin": "Warszawa Modlin",
                    "isReturn": true,
                    "price": 112,
                    "userScore": 98,
                    "isOnOneTicket": true,
                    "landDistance": 181,
                    "regionIds": "(1)(17)(19)",
                    "isWeekend": true
                },
                {
                    "id": 2336,
                    "destination": "Cape Town",
                    "origin": "Stockholm",
                    "isReturn": true,
                    "price": 1474,
                    "userScore": 98,
                    "isOnOneTicket": true,
                    "landDistance": 952,
                    "regionIds": "(12)",
                    "isWeekend": false
                },
                {
                    "id": 2324,
                    "destination": "Agadir",
                    "origin": "Budapest",
                    "isReturn": true,
                    "price": 494,
                    "userScore": 99,
                    "isOnOneTicket": true,
                    "landDistance": 408,
                    "regionIds": "(12)(20)",
                    "isWeekend": false
                }
            ];
        }
        PackageService.prototype.loadAllPackages = function () {
            return this.$q.when(this.packages);
        };
        PackageService.$inject = ['$q'];
        return PackageService;
    }());
    FlytiveApp.PackageService = PackageService;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=userService.js.map