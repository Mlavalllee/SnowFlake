// SnowFlake 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 1000;
cnv.height = 800;

//  Snowflake Array
let SnowFlake = [];

// Event listener / function
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
 if (event.keyCode === 39) {
    SnowFlake.pop();
 } else if (event.keyCode === 37) {
    SnowFlake.push(NewSnow());
 }
}

// call animation loop
requestAnimationFrame(draw);


function draw() {
    //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move and Draw all Bubbles
    for (let i = 0; i < SnowFlake.length; i++) {
        MoveSnow(SnowFlake[i]);
        DrawSnow(SnowFlake[i]);       
    }
    requestAnimationFrame(draw)
}

// Snowflake's variables
function NewSnow(InitX, InitY, InitR, InitV) {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 10),
        v: randomDec(3, 5)
    }
}