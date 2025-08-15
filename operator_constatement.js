// Types Of Operator 

console.log('Arithmetic operator')
{
let a = 5;
let b = 7;
console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a*b = ",a*b)
console.log("a/b = ",a/b)
console.log("a%b = ",a%b)
console.log("a**b = ",a**b)
console.log("Increment Op :-")
console.log("a++ = ",a++)
console.log('post incremet = ',a)
console.log("++a = ",++a)
console.log('post increment = ',a)
console.log("Decrement Op :-")
console.log("a-- = ",a--)
console.log('post decrement = ',a)
console.log("--a = ",--a)
console.log('pre decrement  = ',a)
}


console.log('Assignment operator')
{
    let a = 5;
    console.log("a+= = ",a+=3)
    console.log("a-= = ",a-=3)
    console.log("a*= = ",a*=3)
    console.log("a/= = ",a/=3)
    console.log("a%= = ",a%=3)
    console.log("a**= = ",a**3)
}

console.log('Comparison Operator')
{
    let a = 5;
    let b = 9;
    let c ='5';
    console.log("a==c = ",a==c)
    console.log("a===c = ",a===c)
    console.log("a>b = ",a>b)
    console.log("a<b = ",a<b)
    console.log("a>=b = ",a>=b)
    console.log("a<=b = ",a<=b)
    console.log("a!=b = ",a!=b)
    console.log("a!==c = ",a!==c)

}


console.log('Logical Operator')
{
    let a= 5;
    let b = 7;
    let c =5 ;
    console.log('a==c || a>=b',a==c || a>=b)
    console.log('a>b && a>=b',a>b && a>=b)
    console.log('!(a==b)',!(a==b))
}


console.log('Ternary Operator')
{
    let age = 16;
    let msg = (age>=18) ? 'Adult' : 'Minor'
    console.log(msg)
}

//Conditional Statement

// Number is divisible by 5

let num = prompt('Enter A Number : ');
if(num%5 == 0){
    console.log('Number are divisible by 5')
}
else{
    console.log('Number is Not divisible by 5')
}

// Grade Calculator
let mark = 65;
let grade ;
if (mark >=80 && mark <=100){
    grade = 'A';
}
else if(mark<=79 && mark>=60){
    grade = 'B';
}
else if(mark<=59 && mark >=40){
    grade = 'C';
}
else{
    console.log('Fail')
}
console.log('Grade = ',grade)


//Day Using switch statement

let day = 7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
            console.log("Wednesday");
            break;
    default:
        console.log("Invalid Input");
}


