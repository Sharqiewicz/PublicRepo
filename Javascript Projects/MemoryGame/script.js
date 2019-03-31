const cardsColors = ["red","blue","green","yellow","orange","purple", "aqua","violet","brown",
    "red","blue","green","yellow","orange","purple","aqua","violet","brown"];

let cards = document.querySelectorAll('.rect');
cards = [...cards]; // nodeList -> tablica //

const startTime = new Date().getTime();

let activeCard = "";
let activeCards = [];

const pairs = cards.length/2;
let result = 0;

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

const check = function ()
{
    if(result == pairs)
    {
        document.querySelector('.end').style.display = " flex ";
        const endTime = new Date().getTime();
        const gameTime = (endTime - startTime)/1000;
        alert(`Your time: ${gameTime} seconds!`);
    }
}

const clickedCard = function()
{
    activeCard = this; // addEventListener -> this

    activeCard.classList.remove("hidden"); // usuwamy klase hidden

    if(activeCard == activeCards[0])
    {
        return;
    }

    if(activeCards.length === 0) //1klik
    {
        activeCards[0] = activeCard;
        return;
    }
    else //2kilk
    {
        cards.forEach(card => {
            card.removeEventListener("click", clickedCard);
        })

        activeCards[1] = activeCard;

        setTimeout( function () {
            if (activeCards[0].className == activeCards[1].className)
            {
                yes.play();
                activeCards.forEach(card => card.classList.add("off"));
                cards = cards.filter(card => !card.classList.contains("off")); // jezeli div ma klase off zwraca false i go usuwa
                result++;
            } else
            {
                no.play();
                activeCards.forEach(card => card.classList.add("hidden"));
            }

            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickedCard));

            check();

        }, 1000);

    }

}

const init = function()
{
    cards.forEach(card =>{
        let position = Math.floor(Math.random()*cardsColors.length);
        card.classList.add(cardsColors[position]);
        cardsColors.splice(position, 1); // splice - usuwa element z tablicy //
    })

    setTimeout( function()
    {
        cards.forEach(card => {
            card.classList.add("hidden"); // dodajemy klase hidden
            card.addEventListener("click", clickedCard);
        })
    }, 3000);

};

init();

const newGame = function ()
{
    location.reload();
}