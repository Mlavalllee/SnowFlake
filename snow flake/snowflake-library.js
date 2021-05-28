// library of Snowflake functions

// call function
Snow();

// Generate 50 Snowflakes
function Snow() {
    for (let i = 0; i < 50; i++) {
    SnowFlake.push(NewSnow());
    }
}

// draw / move snowflake
function DrawSnow(ASnow) {
    fill("white");
    circle(ASnow.x, ASnow.y, ASnow.r, "fill");
}

function MoveSnow(ASnow) {
    if (ASnow.y >= 820) {
        ASnow.y = -20;
        ASnow.x = randomInt(0, cnv.width);
    }
    ASnow.y += ASnow.v;
}