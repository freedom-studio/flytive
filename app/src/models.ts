/// <reference path="_all.ts" />

module FlytiveApp {
  
  export class Package {
    constructor(
      public id: number,
      public destination: string,
      public destCoords: string,
      public origin: string,
      public isReturn: boolean,
      public price: number,
      public userScore: number,
      public scoreRange: string,
      public isOnOneTicket: boolean,
      public landDistance: number,
      public regionIds: string,
      public isWeekend: boolean
      )  {      
    }
    
  }   

  export class Date {
    constructor(
      public id: number,
      public outboundDate: string,
      public inboundDate: string,
      public price: number
      )  {      
    }    
  }
  
 
}
