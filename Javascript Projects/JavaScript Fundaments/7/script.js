
//OBSLUGA FORMULARZA//

let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

elForm = document.getElementById("formSignUp");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    let pack = this.options[this.selectedIndex].value;// pobieranie wartosci z select

    if (pack === 'monthly') {
        elPackageHint.innerHTML = "Płacąc za rok, oszczędzasz 10zł!";
    } else {
        elPackageHint.innerHTML = "Dobry wybór!";
    }
}


    function checkTerms(event){
        if(!elTerms.checked){
            elTermsHint.innerHTML = 'Musisz się zgodzić z warunkami!';

            event.preventDefault(); // NIE WYSYLAJ FORMULARZA SIECIOWEGO//
        }
    }



elForm.addEventListener('submit', checkTerms);
elSelectPackage.addEventListener('change', packageHint);

//ILE POZOSTALO ZNAKOW//
/*
let el = document.getElementById("message");

function charCount(param,e){
    var textEntered, charDisplay, counter, lastKey;

    textEntered = el.value;

    charDisplay = document.getElementById('charLeft');
    counter = (200-textEntered.length);
    charDisplay.textContent = `Chars left: ${counter}`;

    if(param===true){
    lastKey = document.getElementById('lastKey');
    lastKey.textContent = `Last char was: ${String.fromCharCode(e.keyCode)}`;}
}
el.addEventListener('keypress', (e)=>charCount(true,e), false);
el.addEventListener('keyup', (e)=>charCount(false,e), false);
*/


//USUWANIE KOMUNIKATU//

/*let msage = '<div class=\"header\"><a id=\"close\" href="#">Zamknij X </a></div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msage;
document.body.appendChild(elNote);

function dismissNote(){
    document.body.removeChild(elNote);
}

let elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote);

*/

//UAKTYWNIENIE POLA TEKSTOWEGO//
/*
const setup = function(){
    let textInput = document.getElementById('username');
    textInput.focus(); // uaktywnienie pola tekstowego// od razu mozna w nim pisac
}

window.addEventListener('load',setup,false);
*/

/*

//ZNALEZIENIE TARGETU KLIKNIECIA//
function getTarget(e){
    return e.target || e.srcElement;
}

//USUWANIE TARGETU//
function itemDone(e){
    let target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;

    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    //zatrzymuje uzytkownika na stronie w tym samym miejscy// o dziwo nie dziala w opera
    if(e.preventDefault()){
        e.preventDefault();
    }else{
        e.returnValue=false;
    }
}

let el = document.getElementById('shoppingList');
el.addEventListener('click', (e)=>itemDone(e),false);*/








//SPRAWDZANIE DLUGOSCI FRAZY W TEXT//
/*var element = document.getElementById('username');
    element.textContent = "";


function checkUsername(e,minLength){
    var elMsg = document.getElementById('feedback');

    if(e.value.length<minLength){
        elMsg.textContent = 'Nazwa uzytkownika powinna miec minimum 5 znakow!';
    }
    else{
        elMsg.textContent ="";
    }
}

element.addEventListener('blur',(e)=>checkUsername(e,5), false);
*/

    //KONSTRUKTOR//
/*
function Hotel(name, rooms){
    this.name = name;
    this.rooms = rooms;
}

let hotel1 = new Hotel("Pod Brzozka", 3);
*/


