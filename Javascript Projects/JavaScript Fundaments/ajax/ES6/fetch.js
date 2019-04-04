// Workshop by Steve Griffith //

let fetch = require("node-fetch");

//this link generate random json data//
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random()*20)+1;
let uri = `${root}/users/${id}`;
console.log(id);
console.log('Fetch', uri);

// response - json data
fetch(uri).then( ( response ) =>{
    if(response.status==200){ // if connection is successful
    return response.json();
    }else{
        throw new Error('Invalid user ID'); // throw starts .catch()
    }
    //.json() convert text into json
}).then( ( data )=>{
    console.log("siema",data);
    let jsonData = JSON.stringify(data);
    console.log(data);
}).catch((err)=>{
   console.log("ERROR", err.message);
});