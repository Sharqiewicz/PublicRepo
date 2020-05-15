const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');


canv.width = 700;
canv.height = 700;

ctx.font = "18px Arial";

function randomPosition(){
    const x = Math.floor(Math.random() * 500);
    const y = Math.floor(Math.random() * 500);
    return { x, y }
}

const tank = {
    tank_topH: 170,
    tank_topW: 31,
    tank_bottomH:182,
    tank_bottomW: 25,
    tank_midH: 264,
    tank_midW: 40,
    tank_cannonW: 137,
    tank_cannonH: 11,
    canon_color: '#222',
}

let {x, y} = randomPosition();

const target = {
    height: 80,
    width: 80
}

const targetX = x + target.height;
const targetY = y + target.width;

const tankX = x + tank.tank_bottomW;
const tankY = y + tank.tank_bottomH;





function drawTank(x, y){

    ctx.clearRect(0, 0, 700, 700)

    ctx.fillStyle = '#003107';
    ctx.fillRect(189 + x, 269 + y, tank.tank_bottomH, tank.tank_bottomW);
    ctx.fillRect(148 + x, 229 + y, tank.tank_midH, tank.tank_midW);
    ctx.fillRect(199 + x , 196 + y, tank.tank_topH, tank.tank_topW);
    ctx.fillStyle = '#222';
    ctx.fillRect(368 + x, 202 + y, tank.tank_cannonW, tank.tank_cannonH);

    ctx.fillStyle = 'orange';
    ctx.fillText("Kacper Szarkiewicz 102",168+x,254+y);
}

let move = false;

function drawTarget(){

    let base_image = new Image();
    base_image.src = './src/target.png';
    base_image.onload = function(){
        ctx.drawImage(base_image,targetX,targetY, 100, 100);
    }
}

setInterval(() => {
    if( move ){
        drawTank(10, 10);
    }
    else{
        drawTank(15, 15)
    }
    drawTarget();
    move = !move;
},240);