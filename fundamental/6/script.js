
// Głowna lista//
let startItem = document.getElementsByTagName('ul')[0];

//DODANIE OSTATNIEGO ELEMENTU//
let newLastItem = document.createElement('li');
let newTextLast = document.createTextNode('krem');
newLastItem.appendChild(newTextLast);

startItem.appendChild(newLastItem);
 //--------------------------------------------//
//NOWY ELEMENT NA POCZATKU LISTY//
let newFirstElement = document.createElement('li');
let newTextFirst = document.createTextNode('kapusta')

newFirstElement.appendChild(newTextFirst);


//InsertBefore - ( co , przed czym )
startItem.insertBefore(newFirstElement, startItem.firstChild);
//---------------------------------------------------------//
//DODANIE KLASY DO WSZYSTKICH ELEMENTÓW//
let itemList = document.querySelectorAll('li');

for(i=0;i<itemList.length;i++)
{
    itemList[i].className = "cool"
}

//----------------------------------------------//
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = itemList.length;
var newHeading = `${headingText} <span> ${totalItems} </span>`;
heading.innerHTML = newHeading;