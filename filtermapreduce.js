
const li = [ 3,4,1,6,7,33,22,64,32,75,8]

//. 1. filter function

//using simple function
const fil = li.filter(function(ele) { return ele>=30 })
console.log(fil)

//using arrow function
const fil1 = li.filter((ele)=> ele == 22 )
console.log(fil1)


//. 2.  map function

//using simple function
const map1 = li.map(function (ele) { return ele+10 })
console.log(map1)

//using arrow function

const map2 = li.map((ele)=> ele-10)
console.log(map2);


//using both map and filter
const mp3 = li.map((ele)=>  ele+100).filter((ele)=> {
  console.log(ele)
  return ele>=150;
});
console.log(mp3)



//. 3. reduce function
//it is used to calculate the sum of array 
const list1 = [1,2,3,4,5,7]
const red = list1.reduce((acc,ele)=> acc+ele,0)
console.log(red);





// filter example array with object

const info = [
  {
    name: 'Gaurav',
    age: 18
  },
  {
    name: 'Amol',
    age: 21
  },
  {
    name: "Shiva",
    age: 20
  },
  {
    name: 'Abhi',
    age: 23
  }
]

const newf = info.filter((ele)=> ele.age >20)
console.log(newf);
