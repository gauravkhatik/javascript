//for loop simple program

for(let i=1; i<=5; i++){
    console.log(i);
}
console.log('Loop Ended');


//even Number from 1 to 100
let num =0;
while(num<=100){
    if(num%2==1){
        console.log(num);
    }
    num++;
}

//guessing number game

let no =99;
let fi = prompt('Guess a number');
while(fi != no){
    fi = prompt("You enter wrong number, Enter Again")
}

 console.log("Correct Number ");

//for-of loop using(aaray,string,function)
let str="Gaurav";
for(let val of str){
    console.log(val);
}



// for-in loop using object
let stu ={
    name:'Gaurav',
    age : 31,
    cgpa : 9.4
}
for(let key in stu){
    console.log('Key = '+key+" Value = ",stu[key])
}
