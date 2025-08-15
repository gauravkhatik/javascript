//String in JS

//String Interpolation
const stu = {
    name :"Gaurav",
    age : 21,
};
let res = `My name is ${stu.name} and my age ia ${stu.age}`;
console.log(res);


//String Expression Evaluation
let a = 4;
let b = 8;
let val = `The sum is ${2+4}`;
console.log(val);

let final = `THe division of a and b is : ${b/a}`
console.log(final);


//String Methods:

{

let str1 = "  GauravKhatik";
let str2 = "Developer";

console.log('Length of String = '+str1.length);
console.log('Upper Case : '+str1.toUpperCase());
console.log('Lower Case : '+str1.toLowerCase());
let newstr = str1.replace('a','k');
console.log('Replacing One :',newstr);
let newstr1 = str1.replaceAll('a','A');
console.log("Replacing All : ",newstr1);
console.log("Removing Whitespace : ",str1.trim())
console.log(str1.charAt('5'));
console.log(str1.indexOf('v'));
let newstr2 = str1.slice(2,6);
console.log("After Slicing : ",newstr2);
console.log('String are exits : ',str1.includes('aur'));
console.log('Starting With Ga : ',str1.startsWith('Ga'));
console.log('Ending With av : ',str1.endsWith('tik'));

let name1 = "Khatik";
console.log(typeof name1);
console.log(name1.split());
let res = name1.split();
console.log(typeof res);


}


