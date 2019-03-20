var element = document.getElementById('username');
element.textContent = "";
var dziw;
function checkUsername(e){
    dziw = e;
    //dziw.target.value - ZAWARTOSC POLA TEKSTOWEGO//

    let kome = document.getElementById("kom");
    kome.textContent = dziw.target.value;

}

element.addEventListener('blur',checkUsername, false);