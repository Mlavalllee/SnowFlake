// SnowFlake 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 1000;
cnv.height = 800;


// Arrays / Global variables
let SnowFlake = [];
let Speed = [];
let velocity = 0;


// Draw Snowflake
function fill(Fill) {
    ctx.fillStyle = Fill
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, );
    ctx.fill();
}

// Events listener / functions
cnv.addEventListener("click", Click);
document.addEventListener("keydown", keydownHandler)

function Click() {
    SnowFlake.push(NewSnow());
    let i = SnowFlake.length;
    Speed.push;
    Speed[i] = 0;
}

function keydownHandler() {
 if (event.keyCode === 39) {
    Speed.pop();
    SnowFlake.pop();
    for (let i = 0; i < Speed.length; i++) {
        console.log(i);
    }
 }
}

// call functions
Snow();
SnowSpeed();
requestAnimationFrame(draw);

// Generate Snow and store snowflake speed data
function Snow() {
    for (let i = 0; i < 50; i++) {
    SnowFlake.push(NewSnow());
    }
}

function SnowSpeed() {
    for (let i = 0; i < 50; i++) {
    Speed.push;
    Speed[i] = 0;
    }
}

function draw() {
    //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move and Draw all Bubbles
    for (let i = 0; i < SnowFlake.length; i++) {
        MoveSnow(SnowFlake[i]);
        DrawSnow(SnowFlake[i]);
        
        if(SnowFlake.y == 820) {
            SnowFlake.y == -20
        }
    }
    velocity = 0;
    requestAnimationFrame(draw)
}

function NewSnow(InitX, InitY, InitR) {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 10)
    }
}

function DrawSnow(ASnow) {
    fill("white");
    circle(ASnow.x, ASnow.y, ASnow.r, "fill");
}

function MoveSnow(ASnow) {
    for(let i = 0; i < Speed.length; i++) {
        if(Speed[i] == 0) {
            Speed[i] += randomDec(3, 6);
        }
    }
    if (ASnow.y >= 820) {
        ASnow.y = -20;
        ASnow.x = randomInt(0, cnv.width);
    }
    ASnow.y += Speed[velocity];
    velocity++;

}