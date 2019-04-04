let irises = document.getElementsByClassName('Iris');
let website = document.querySelector("html");

website.addEventListener('mousedown', function(){
    for(i=0;i<2;i++){
        irises[i].style.backgroundColor = "red";
    }
});
website.addEventListener('mouseup', function(){
    for(i=0;i<2;i++){
        irises[i].style.backgroundColor = "black";
    }
});

document.onmousemove = function(){

    let x = event.clientX * 100 /window.innerWidth + "%";
    let y = event.clientY * 100 /window.innerWidth + "%";

    for( i=0; i<2;i++)
    {
        irises[i].style.left = x;
        irises[i].style.top = y;
        irises[i].style.transform = `translate(-${x}, -${y})`;
    }

}