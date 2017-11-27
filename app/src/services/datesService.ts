/// <reference path="../_all.ts" />

module FlytiveApp {
  
  export interface IDatesService {
    loadDates(): ng.IPromise<Date[]>;
  }
  
  export class DatesService implements IDatesService {

    static $inject = ['$q'];
    
    constructor(private $q: ng.IQService) {      
    }

    loadDates() : ng.IPromise<Date[]> {
        return this.$q.when(this.dates);
    }

    private dates: Date[] =[
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
}