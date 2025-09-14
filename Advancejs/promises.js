const prom = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("Asyn Task Completed")
    resolve();
  },2000)
})

prom.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("Done")
})





const prom1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({user:'Gaurav', age: 21})
  },2000)
})
prom1.then((result)=>{
  console.log(result);
})




const prom2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
  let error = false;
   if(!error){
    resolve({username:'gauravk',pass:'gkk'})
   }
   else{
    reject("Error: Failed")
   }
  }, 2000); 
})

prom2.then((result)=>{
  return result.username
})
// then chaning
.then((user)=>{
  console.log(user)
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("Successful")
})



const prom3 = new Promise((reso, reje)=>{
  setTimeout(() => {
    let error = true;
   if(!error){
    reso({username:'gauravk',pass:'gkk'})
   }
   else{
    reje("Error: Failed 2")
   }
  }, 2000);
})

async function consumeProm() {
try{
   const resp = await prom3
   console.log(resp);
}

catch(res){
  console.log(res);
}
}
consumeProm();




//fetch

fetch('https://api.github.com/users/gauravkhatik')
.then((res)=>{
  return res.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error)
})
.finally(()=>{
  console.log("Work Done")
})