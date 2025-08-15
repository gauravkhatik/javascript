//Array in JS
{
let num = [5,7,8,22,'hi',22.32];
for(let kam of num){
    console.log(kam);

}
console.log(num);
console.log(typeof num);
console.log(num.length);
}

//Methods in array

{
    let num = [5,7,2,77,30,55];
    let arr = ['hi','Gkk',44,'yes',66,88];
    console.log('Array 1 : ',num);
    console.log('Array 2 : ',arr);
    //push
    num.push(8);
    console.log('Push array ',num);
    //pop
    num.pop();
    console.log('Pop array ',num);
    //shift
    num.shift();
    console.log('Shift array ',num);
    //unshift
    num.unshift('gkk');
    console.log('Unshift array ',num);
    //length
    console.log("Size Of Array : ",num.length);
    //indexOf
    console.log('Index Of 30 : ',num.indexOf(30));
    //includes checks element are avilable or not
    console.log("gkk element are present : ",num.includes('gkk'));
    //join array into string
    let jo = arr.join('/ ');
    console.log("Join Array : ",jo);
    console.log('Type of join : ',typeof jo);
    //get sub array using slice
    console.log('Before Slicing array : ',num);
    num.slice(2,4);
    console.log('After Slicing Array : ', num.slice(2,4));
    //splice- add remove element at index
    console.log('After Splicing : ',num.splice(2,0,'pk'));
    //using map create a new array
    console.log('Array : ',num);
    let k = num.map(a => a*2);
    console.log('New Array kk : ',k);
    // convert array into string
    let str = num.toString();
    console.log("New String : ",str);
    console.log('Change Type : ',typeof str);
    //concat two or more array
    let cc = arr.concat(num);
    console.log("After Concatnation : ",cc);


}


//calculate average of marks
{
let mark = [33,42,26,49,36];
let sum = 0;
for (let i =0; i<mark.length; i++){
sum += mark[i];

}
console.log('Total Sum ',sum);
console.log('Array Size',mark.length);
let avg = sum / mark.length;
console.log('Average Of Marks = ',avg);
}


//Given array with price 5 items having 10 % offer return the final price after applying offer

let price = [300,250,600,800,580];
for (let i =0; i<price.length; i++){
   let  offer = price[i]/10;
   price[i] -= offer;
    
}
console.log('Final Offer Price : ',price );



