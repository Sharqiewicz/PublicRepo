// Workshop by //
// Youtube.com/overment //

function* moviesSequence(){
    // ( 2 ) //
    const movie1 = yield 'Gone in 60 seconds'; // Here we cannot set a const context --> to 21 line
    console.log(movie1);

    // ( 1 ) //
    //yield('Gone in 60 seconds');
    //yield('Peaceful Warrior');
    //yield('Matrix');
}

const movieGen = moviesSequence(); // Generator
// .next() - to invoke code in generator
//console.log(movieGen.next());

const movie = movieGen.next();
console.log(movie);
movieGen.next('Here we can');


// we can stop generator by using keyword - yield - and invoke later code by using .next()
// yield return object which have two elements - 1. value of element - 2. bool about the generator`s code is done

//for(let movie of movieGen){
    //console.log(movie);
//}