

interface Vehicle {
    name: string; 
    year: Date; 
    broken: boolean;
    summary(): string;
}



const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() : string {
        return 'this is returning str';
    }
};



const printVehicle = (vehicle: Vehicle): void => {
    console.log("🚀 ~ printVehicle ~ broken:", vehicle.broken)
    console.log("🚀 ~ printVehicle ~ year:", vehicle.year)
    console.log("🚀 ~ printVehicle ~ name:", vehicle.name)
}


printVehicle(oldCivic)