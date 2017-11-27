/// <reference path="_all.ts" />
var FlytiveApp;
(function (FlytiveApp) {
    var Package = /** @class */ (function () {
        function Package(id, destination, destCoords, origin, isReturn, price, userScore, scoreRange, isOnOneTicket, landDistance, regionIds, isWeekend) {
            this.id = id;
            this.destination = destination;
            this.destCoords = destCoords;
            this.origin = origin;
            this.isReturn = isReturn;
            this.price = price;
            this.userScore = userScore;
            this.scoreRange = scoreRange;
            this.isOnOneTicket = isOnOneTicket;
            this.landDistance = landDistance;
            this.regionIds = regionIds;
            this.isWeekend = isWeekend;
        }
        return Package;
    }());
    FlytiveApp.Package = Package;
    var Date = /** @class */ (function () {
        function Date(id, outboundDate, inboundDate, price) {
            this.id = id;
            this.outboundDate = outboundDate;
            this.inboundDate = inboundDate;
            this.price = price;
        }
        return Date;
    }());
    FlytiveApp.Date = Date;
})(FlytiveApp || (FlytiveApp = {}));
//# sourceMappingURL=models.js.map