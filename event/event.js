
let btn = document.querySelector('button');
// {
// btn.onclick = function(evt) {
//     alert("Successfull");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// }

// btn.addEventListener('click', function(evt){
//     alert("Successfull");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// })

let bo = document.querySelector('body');
let mode = 'light';
btn.addEventListener('click', function (){
    if(mode == 'light'){
        mode = 'dark';
        bo.style.backgroundColor = 'red';

    }
    else{
       mode = 'light';
        bo.style.backgroundColor = 'blue';

    }
})