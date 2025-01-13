class Vahicle {
    drive() : void{
        console.log("🚀 ~ Vahicle ~ drive ~ drive:")
        
    }
    honk() : void{
        console.log("🚀 ~ Vahicle ~ honk ~ honk:")
        
    }
}

class Car extends Vahicle{
  drive(): void {
      console.log("🚀 ~ Car ~ drive ~ void:")
      
  }
}

const vehicle = new Car()
vehicle.drive()