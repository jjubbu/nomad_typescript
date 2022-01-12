interface Hum {
    name:string,
    age:number
}

const human = {
    name:"seona",
    age:24
}

const sayHi = (hum:Hum):string=> {
   return `${hum.name}'s age is ${hum.age}`
}

console.log(sayHi(human))

export {};