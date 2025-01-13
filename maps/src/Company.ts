import { faker, NameModule } from "@faker-js/faker";



export class Company {
    companyName: string
    catchPhrase : string
    location: {
        lat: number,
        lng: number,
    };

    constructor(){
        this.companyName = faker.company.name(),
        this.catchPhrase = faker.company.catchPhrase(),
        this.location ={
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())

        } 
    }
    markerContent() : string {
        return `<h1>Company name is ${this.companyName}</h1>
           <h3>CatchPhrase is ${this.catchPhrase}</h3>`
  }
  
}

// npm install @types/google.maps

