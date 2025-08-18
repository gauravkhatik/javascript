const start = document.getElementById('start')
const stop1 = document.getElementById('stop')

const randc = function(){
  const hex = '0123456789ABCDEF';
  let color = '#'

  for (let i = 0; i<6; i++){
     color += hex[Math.floor(Math.random()*10)]
  }
  return color;
}


let interv;

const startbg = function (){
   interv = setInterval(changebg,1000)

 function changebg (){
  document.body.style.backgroundColor = randc()
}
};


const stopchanging = function (){
   clearInterval(interv)
}

start.addEventListener('click',startbg);
stop1.addEventListener('click',stopchanging)