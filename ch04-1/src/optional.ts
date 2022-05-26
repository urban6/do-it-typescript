interface IAgeable {
  age?: number;
}

function getName(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}

// console.log(getName(undefined));
// console.log(getName(null));
console.log(getName({ age: 32 }));
