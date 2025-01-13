// class HoldAnything<TypeData> {
//      data : TypeData ;
// }

// const holdNo = new HoldAnything<number>();
// holdNo.data = 1


// const holdString = new HoldAnything<string>()
// holdString.data = "sneha"

class ArrayOfString {
     constructor(public collection : string[]){}
     get (index: number): string {
          return this.collection[index]

     }
}
class ArrayOfNumber {
     constructor(public collection : number[]){}
     get (index: number): number {
          return this.collection[index]

     }
}

class ArrayOfAnything <T> {
     constructor (public collection : T[]){}
     get(index: number) : T {
          return this.collection[index]
     }

}

new ArrayOfAnything<string>(['a', 'b', 'c', 'd'])

// generics around functions

function printArray<T>(arr: T[]) : void {
     for (let i = 0; i < arr.length; i++) {
          console.log("🚀 ~ arr[i]:", arr[i])       
     }
}

printArray<string>(['a', 'b', 'c'])


// genreric constraint
