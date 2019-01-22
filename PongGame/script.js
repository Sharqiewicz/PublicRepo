const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');


//wymiary poszczegolnych elementow//
canv.width = 1000;
canv.height = 500;

const ballSize = 20;
let ballX = 490;
let ballY = 240;
let ballSpeedX = 4;
let ballSpeedY = 4;

const platformH = 100;
const platformW = 20;

const playerX = 70;
let playerY = 200;

const enemyX = 910;
let enemyY = 200;

const lineWidth = 6;
const lineHeight= 16;

const topBorder = canv.offsetTop;

/////////////////////////////////////////////////////
const table = function()
{
    ctx.fillStyle = '#111';
    ctx.fillRect(0,0,1000,500);

    for(i=10;i < 500; i = i +26)
    {
        ctx.fillStyle = '#2b3030';
        ctx.fillRect(497,i,lineWidth,lineHeight);
    }
}

const ball = function()
{
    ctx.fillStyle='#fefefe';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    if( ballY <=0 || ballY + ballSize >=500 )
    {
        ballSpeedY = -ballSpeedY;
        acceleration();
    }
    if( ballX <=0 || ballX + ballSize >=1000)
    {
        ballSpeedX = -ballSpeedX;
        acceleration();
    }
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

}

const player = function()
{
    ctx.fillStyle = '#474'
    ctx.fillRect(playerX,playerY,platformW,platformH);
    colisionP();
}

const enemy = function()
{
    ctx.fillStyle = '#744';
    ctx.fillRect(enemyX, enemyY, platformW,platformH);
    colisionE();
}

const refresh = function()
{
    table();
    ball();
    player();
    enemy();
    enemyPosition();
    endGame();
}

const playerPosition = function(event)
{
    playerY = event.clientY - topBorder - (platformH/2);
    if(playerY <= 0)
    {
        playerY = 0;
    }
    else if (playerY >=400)
    {
        playerY = 400;
    }

    enemyY = playerY;
}

const enemyPosition = function()
{

}

const colisionP = function()
{
    if(ballX - platformW <= playerX && ballY >= playerY - ballSize && ballY <=playerY + platformH)
    {
        ballSpeedX = -ballSpeedX;
    }
}

const colisionE = function()
{

    if(ballX + platformW >= enemyX && ballY >= enemyY - ballSize && ballY <=enemyY + platformH )
    {
        ballSpeedX = -ballSpeedX;
    }

}

const acceleration = function()
{
    if(ballSpeedX > 0 )
    {
        ballSpeedX = ballSpeedX + 0.1;
    }
    else if(ballSpeedX < 0 )
    {
        ballSpeedX = ballSpeedX -0.1;
    }
    if(ballSpeedY >0)
    {
        ballSpeedY = ballSpeedY + 0.1;
    }
    else if(ballSpeedY <0)
    {
        ballSpeedY = ballSpeedY -0.1;
    }
}

const endGame = function()
{
    if(ballX+ballSize > 1000 )
    {
        alert("You Win");
        location.reload();
    }
    else if ( ballX+ballSize <=20)
    {
        alert("You Lose");
        location.reload();
    }
}

////////////////////////////////////////////////////////////

setInterval(function(){ return refresh();},16);
canv.addEventListener('mousemove', playerPosition);