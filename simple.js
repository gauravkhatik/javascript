var name = 'Gaurav';
const age = 17;
const email = 'gauravkhatik806@gmail.com';

console.table({name,age,email})
console.log(undefined == 0);
console.log(null === 0);

console.log(name.length);
let da = new Date()
console.log(da.toLocaleString());


const info ={
  name: 'gaurav',
  age: 31,
  roll_no: 11,
  welcome: function(){
    console.log(this);
  }
}
info.welcome();
console.log(this);

function one(){
  console.log(this);
}
one();