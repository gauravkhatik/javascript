//using array
const myarr = ['Aa','Bb','Cc',"Dd",'Ee']
console.log(`Array length is ${myarr.length}`)

for (const arr of myarr) {
  console.log(`Array Element is ${arr}`)
  
}

//using foreach loop
console.log("For Each Loop")
myarr.forEach(function (li){
  console.log(li)
})

console.log("For Each with extra parameter Loop")
myarr.forEach(function (li,index,myarr){
  console.log(li,index,myarr)
})

//using map 
const map1 = new Map()
map1.set('IN', 'India')
map1.set('USA', 'United State')
map1.set('FA','France')
console.log(map1);
console.log()
//printing key value using for loop
for( const [key,value] of map1){
  console.log([key,value])
}



//forof loop in object
// object == forin loop 
const list = {
  1 : 'One',
  2 : 'Two',
  3 : 'Three',
  4 : 'Four'
}
//it not directly print valuee.
//using for in loop
for(const [key] in list){
  console.log(`${key} == ${list[key]}`)
}

//using for in loop
// for(const key in list){
//   console.log(`${key} == ${list[key]}`)
// }