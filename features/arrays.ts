const carMakers = ['ford', 'volvo', 'toyota'] //when init empty arr then give annotation
console.log("🚀 ~ carMakers:", carMakers)

const dates = [new Date(), new Date()]


const carsByMe = [
    ['f150'],
    ['carolla'],
    ['camaro']
];

const car = carMakers[0]
console.log("🚀 ~ car:", car)


const myCar = carMakers.pop()
console.log("🚀 ~ myCar:", myCar)

carMakers.map((car) => {
    return car.toUpperCase
})

console.log("🚀 ~ carMakers.map ~ carMakers:", carMakers)

// can contain diff types in arr
// const flexibleDates : (Date | string) []= [new Date(), '2024-18']

interface Person {
    name: string;
    age: number;
  }
   
  function greet(person: Person) {
    return "Hello " + person.name;
  }

  