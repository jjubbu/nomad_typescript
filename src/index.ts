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
class Humm {
    public name:string;
    public age:number;
    constructor (name:string, age:number){
        // 이 클래스의 name 과 argument name 은 같다..는 으미!
        this.name = name;
        this.age = age;
    }
}

const seona = new Humm("jjubbu",24);

console.log(sayHi(seona))


export {};