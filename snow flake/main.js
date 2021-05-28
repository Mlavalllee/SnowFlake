// SnowFlake 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 1000;
cnv.height = 800;

//  Snowflake Array
let SnowFlake = [];

// Events listener / function
cnv.addEventListener("click", Click);
document.addEventListener("keydown", keydownHandler)

function Click() {
    SnowFlake.push(NewSnow());
}

function keydownHandler(event) {
 if (event.keyCode === 39) {
    SnowFlake.pop();
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