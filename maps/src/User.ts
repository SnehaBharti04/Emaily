import {faker} from "@faker-js/faker"

export class User {
   name: string;
   location: {
    lat : number,
    lng: number
   };
   constructor(){
       this.name = faker.name.firstName()
       console.log("🚀 ~ User ~ constructor ~ this.name:", this.name)
    //    this.location.lat will give err as it is not considered obj untill init so it will give undefined
       this.location = {
        lat : parseFloat(faker.address.latitude()),
        lng : parseFloat(faker.address.longitude())
       }
   }
   markerContent() : string {
         return `Username is ${this.name}`
   }
}

