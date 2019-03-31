////////////////////////////
////// Workshop from ///////
// Youtube.com/helloroman //
////////////////////////////


//////////// ( 2 ) //////////////
/*
const myArray = [1,2,3,4,5,6,7,8];

// Cut out a part of Array //
// arr.slice(begin,end (Array.length) ) //
// slice from fifth element to sixth element //
console.log(myArray.slice(5,7));

// removing elements from Array //
// arr.splice( begin , deleteCount, elementToAddInRemovedPlaces ) //
myArray.splice(5,0,'hello') // only added hello at 5 index //
console.log(myArray);
console.log(myArray.splice(3,2));
console.log(myArray);

// arr.forEach( callback(currentValue, index){
    //code//
// });

myArray.forEach((element, i)=>{
   console.log(`${element} is at ${i} index! `);
});

*/
/////////     ///////////      ///////////

/*
const list = document.querySelector('#list');

const myArray = ['Youtube', 'Com', 'Hello', "Roman", "Array", "Methods"];

myArray.forEach((item)=>{
    let li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
});

const listElements = document.querySelectorAll('li'); // querySeletorAll return !!!NodeList!!!

listElements.forEach((element)=>
{
   element.addEventListener('click', (e)=>{
       listElements.forEach((element)=>{
          element.classList.remove('list-item');
       });
       e.target.classList.toggle('list-item');
   });
});
*/

/////////////// ( 1 ) ///////////////////
/*
const app = document.querySelector('#app');
const div = document.createElement('div');

const tags = ['jazz', 'rock'];

// .pop() removing last element from Array //
// .push() Adding element at the end of Array //
// .shift() removing first element from Array //
// .unshift() adding element at the beginning of  Array //
tags.push('metal');

const newTags = ['rnb', 'pop'];

// connecting two Arrays into one Array by using .concat() //
const allTabs = [].concat(tags, newTags);


// .join() - defining a separator //
div.innerText = allTabs.join(', ');

app.appendChild(div);
*/

