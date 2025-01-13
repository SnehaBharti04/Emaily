const profile = {
    pName: 'Alex',
    age : 18,
    cords : {
      lat : 12,
      lng : 13
    },

   setAge(age: number) : void{
     this.age = age;
    }
};

const {age, pName}: {age:number; pName:string} = profile

const {cords :{lat, lng}} :{ cords :{lat: number; lng: number}}  = profile
