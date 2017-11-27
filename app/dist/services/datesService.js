/// <reference path="../_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var DatesService = /** @class */ (function () {
        function DatesService($q) {
            this.$q = $q;
            this.dates = [
                {
                    "id": 2303,
                    "outboundDate": "2017-12-09T06:50:00",
                    "inboundDate": "2017-12-23T12:10:00",
                    "price": 95
                },
                {
                    "id": 2304,
                    "outboundDate": "2017-12-09T06:50:00",
                    "inboundDate": "2017-12-30T12:10:00",
                    "price": 95
                },
                {
                    "id": 2305,
                    "outboundDate": "2017-12-12T07:50:00",
                    "inboundDate": "2017-12-23T12:10:00",
                    "price": 95
                },
                {
                    "id": 2306,
                    "outboundDate": "2017-12-12T07:50:00",
                    "inboundDate": "2017-12-30T12:10:00",
                    "price": 95
                }
            ];
        }
        DatesService.prototype.loadDates = function () {
            return this.$q.when(this.dates);
        };
        DatesService.$inject = ['$q'];
        return DatesService;
    }());
    FlytiveApp.DatesService = DatesService;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=datesService.js.map