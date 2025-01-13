const today = new Date()
console.log("🚀 ~ today:", today)

today.getMonth()

const person = {
    age: 20,
    name: "Sneha"
}

class Color {}
   
const red = new Color()

// array 

let arr : number[] = [1, 3, 6]


// object literal 

let numObj : {x : number, y: number} = {
    x: 10,
    y: 20
}

// funtion

const logNumber : (i : number) => void = (i : number) => {
    console.log("🚀 ~ i:", i)
    
}

// any type (undrstandin)  here type annotation comes into picture as json.parse was returning any type earlier 

const json = '{"x": 10, "y": 20}'

const cordinate: {x: number, y: number} = JSON.parse(json)
console.log("🚀 ~ cordinate:", cordinate)



const words = ["red", "green", "blue"]

let found: boolean= false ;

for(let i = 0 ; i < words.length; i++){
    if(words[i] == "green"){
        found = true
    }
    console.log("🚀 ~ found:", found)

}


const num = [0, 12, -1]

let flag: boolean | number = false ;

for(let i = 0 ; i < num.length; i++){
    if(num[i] == 12){
        flag = num[i]
    }
    console.log("🚀 ~ flag:", found)

}