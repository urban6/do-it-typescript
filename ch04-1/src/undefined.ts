interface INameable {
  name: string;
}

export function getName(o?: INameable): string {
  return o != undefined ? o.name : 'unknown name';
}

let n = getName(undefined);
console.log(n);
