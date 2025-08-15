
let id = document.getElementById('one')
console.log("This is id : ",id);
let id1 = document.getElementById('btn')
console.dir(id1);

let newcls = document.getElementsByClassName('two') 
console.log("This is Class : ",newcls);


let ta = document.getElementsByTagName('p')
console.log("Element By Tag :" ,ta)

let aa = document.querySelector('#btn');
console.log("Element By query selector :" ,aa)


//Properties of dom
//tagname
console.log(id.tagName);

//innnerText
id.innerText;


//Adding Text to h3 tag
let mp = document.querySelector('h3');
console.dir(mp);

mp.innerText = mp.innerText + 'My name is Gaurav Khatik';


//create a 2 para tag and some new unique text 

let para = document.querySelectorAll('p');
console.log(para)

para[0].innerText = 'Gaurav Kahtik 1';
para[0].innerText;
para[1].innerText = 'Gaurav Kalyan Khatik';
para[1].innerText;


//get atribute
para.getAttribute('p');


//attribute

//set attribute
{
    let k = document.querySelector('#j1');
    console.log('Tag Retrun := ',k)
    console.log('Tag Name :- ',k.tagName);

    console.log('Inner Text :- ',k.innerText);
    console.log('New Inner Text :- ',k.innerText = 'This is New Inner HTMl');

    console.log('Inner Html : ',k.innerHTML);
    console.log('New Inner Html : ',k.innerHTML = '<h5>Zeal College Of Engineering </h5> ' );


   let att = k.getAttribute('id');
   console.log(att);

   let geth4 = document.getElementsByTagName('h4');
   console.log('REturn Tag : ',geth4);

   let getatth4 = geth4[0].getAttribute('class');
   console.log('Get Attribute : ',getatth4);

   let getatth5 = geth4[0].getAttribute('name');
   console.log('Get Attribute of name  : ',getatth5);


   geth4[0].setAttribute('class','four')
   console.log('New class =',geth4[0].getAttribute('class'));

}

{
    let h6 = document.querySelector('h6');
    console.log('Return Tag: ',h6);
    console.log('Old Attribute ; ',h6.getAttribute('class'));

    h6.setAttribute('class','class1')
    console.log('New Attribute ; ',h6.getAttribute('class'));

    //style aatribute

    h6.style.backgroundColor = 'red';

}
{


    let lis = document.querySelector('ul')

    let aa = document.createElement('button');
    aa.innerText = "GKK";

   // ending add element [inside]
    lis.append(aa);

    //starting add element [inside]
    lis.prepend(aa);

    //add  before (begin) the tag [outside]
    lis.before(aa);

    //add after (end) the tag [outside]
    lis.after(aa);
    

    //remove the tag
    aa.remove()

    

    
}
    



