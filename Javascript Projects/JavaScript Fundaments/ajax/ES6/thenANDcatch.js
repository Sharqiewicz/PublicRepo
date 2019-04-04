/// WORKSHOP BY Steve Griffith//

const random = ()=> Math.floor(Math.random()*10)+1;

let promise1 = new Promise(( resolve, reject ) => {
    // resolve = promise resolves positively
    // reject = promise fails
    let x =5;
    //resolve(x); //calling this will call then()
    //reject(x);
    let num = random();
    setTimeout(resolve,1500, num);
});

//.fetch() returns a promise

promise1.then( (ex) => {
    console.log(ex);
    return ex *2;
}).then( (returnedEx) =>{
    console.log(returnedEx);
}).catch( (e)=>{
   //catch when then throw error or when promise returns error
    console.log('caught',e);
});