
//zmienna przechowująca ciąg znaków//
var string ="";

//funkcja przyjmujaca 4 zmienne, liczba - liczba krążków | a,b,c - oznaczenia krążków//
const hanoi = function(liczba, a,b,c)
{

//podstawowy warunek - gdy liczba krążków jest większa od zera ( gdyby było 0 to znaczy, że wszystkie zostały ułożone )
    if(liczba!==0)
    {
        //wywolujemy funkcje hanoi dla mniejszej liczby krążków, by poznać ciąg znakowy + zmieniamy według zasady litery C z B //
        hanoi(liczba-1,a,c,b)

        //zapisujemy zmienne do ciągu znakowego//
        string  = ( string + a + c + " ");

        //wywolujemy funkcje hanoi dla mniejszej liczby krążków, by poznać ciąg znakowy + zmieniamy według zasady litery A z B //
        hanoi(liczba-1,b,a,c);

    }
}

console.log("\n");

//wywolujemy funkcje dla 5 krązków//
for(i=1;i<6;i++) {
    // wywolujemy funkcje hanoi z oznaczeniami A - B - C //
    hanoi(i,'A','B','C');

    // wyswietlamy rozwiazanie //
    console.log(string);
    console.log("\n");

    //resetujemy ciąg znaków//
    string="";

}
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

