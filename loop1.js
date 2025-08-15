
//for loop
for(let i =1; i<=10; i++){
  console.log(`Table ${i}:`)
  for(let j =1; j<=10; j++){
    console.log(i,'*',j,'=',(i*j));
  }
}

//while loop
const myarr = ['Aa','Bb','Cc',"Dd",'Ee']
console.log(`Array length is ${myarr.length}`)
let arr =0;
while(arr<myarr.length){
  console.log(`Array Element is ${myarr[arr]}`);
  arr = arr+1;
}

// do while loop
const myarr1 = ['Aa','Bb','Cc',"Dd",'Ee']
console.log(`Array length is ${myarr1.length}`)
let arr1 =0;
do{
  console.log(`Array1 Element is  ${myarr1[arr1]}`)
  arr1++;
} while(arr1<myarr1.length);

