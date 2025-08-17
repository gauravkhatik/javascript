const ran = parseInt(Math.random()*100+1);
console.log(ran)

const submit  = document.querySelector('#subt')
const userin  = document.querySelector('#guessField')
const guesslot  = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult')
const lowOrHi  = document.querySelector('.lowOrHi')
const satrtover  = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevgess = []
let numgess = 1

let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userin.value);
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please Enter A Valid A Number")
  }
  else if(guess < 0){
    alert("Please Enter A  Number That is Greater Than 0")
  }
  else if(guess >= 100){
    alert("Please Enter A Number Less Than 100");
  }
  else{
    prevgess.push(guess)
    if(numgess === 11){
      displayguess(guess)
      displaymessange(`Game Over, Random Number is ${ran}`)
      endgame()
    }else{
      displayguess(guess)
      checkguess(guess)
    }
  }

}

function checkguess(guess){
  if(guess === ran){
    displaymessange(`You Are Are Right`)
  }else if( guess < ran){
    displaymessange(`Number is Low`)
  }
  else if( guess > ran){
    displaymessange(`Number is High`)
  }
}

function displayguess(guess){
  userin.value =  ""
  guesslot.innerHTML += `${guess}, `
  numgess++;
  remaining.innerHTML = `${11-numgess}`
}

function displaymessange(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endgame(){
  userin.validateGuess = ''
  userin.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = 'newg'> Satrt New Game</h2>`
  satrtover.appendChild(p)
  playgame = false;
  newgame()

}

function newgame(){

  const newgamebtn = document.querySelector('#newg')
  newgamebtn.addEventListener('click', function(e){
    const ran = parseInt(Math.random()*100+1);
    prevgess = []
    numgess = 1
    guesslot.innerHTML = ''
    remaining.innerHTML = `${11-numgess}`
    userin.removeAttribute('disabled')
    satrtover.removeChild(p)
    playgame = true;
  })
} 