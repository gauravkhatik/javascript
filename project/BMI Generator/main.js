const f1 = document.querySelector('form');

f1.addEventListener('submit', function(ele){
  ele.preventDefault();
  
  const h1 = parseInt(document.querySelector('#height').value);
  const w1 = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results')

  if(h1 === '' || h1 < 0 || isNaN(h1)){
    res.innerHTML= 'Enter vaild Height'
  }
  else if(w1 === '' || w1 < 0 || isNaN(w1)){
    res.textContent= 'Enter vaild Weight'
  }
  else{
    const bmi = (w1 / ((h1 / 100) ** 2)).toFixed(2);;
    if(bmi <= 18.6 ){
    res.innerHTML = `<b>Under Weight : ${bmi}</b>`
    }
    else if( bmi > 18.6 && bmi < 24.9 ){
    res.innerHTML = `<b>Normal Range : ${bmi}</b>`
    }
    else if(bmi > 24.9 ){
    res.innerHTML = `<b>Over Weight : ${bmi}</b>`
    }
  }
})