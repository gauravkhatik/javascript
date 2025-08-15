//simple function
function add(){
    return 3*5;
}
console.log(add());

//parameter Function
function mul(a,b){
    console.log('Mul = ',a*b);

}
mul(2,5);

//arrow function

let sub = (x,y) => {
    return x-y;
}
console.log(sub(22,33));


//WAP to count the given string vowels and return the number
let sum =0;
function count(str){
    for(let num of str){
        if(num === 'a' || num === 'e' || num === 'i' || num === 'o' || num === 'u'){
            sum++;
        }
    }
    console.log(sum)
}

count("Gauravkhatik");


// for each function

let ab = [2,5,6,9,55];
ab.forEach(element => {
    console.log(element*element);
});