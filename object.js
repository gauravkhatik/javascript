const mysym = Symbol("GKK")

const myobj = {
  name : 'Gaurav',
  age: 12,
  mark: 34,
  //symbol
  [mysym] : "GKK"
}

const obj2 = {
  1: 'One',
  2: 'Two',
  3: 'Three'
}

console.log(myobj);
console.log(myobj['name']);

//accessing symbol
console.log(myobj[mysym])
console.log(typeof myobj[mysym])

console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));

// Combining Two Object
const new1 = Object.assign({},myobj,obj2);
console.log(new1);

console.log('Hello')

const new2 = {...myobj,...obj2}
console.log(new2);





