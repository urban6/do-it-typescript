interface Person4 {
  name: string;
  age?: number;
}

class Person4 implements Person4 {
  constructor(public name: string, public age?: number) {}
}

let jack4 = new Person4('Jack', 32);
console.log(jack4);
