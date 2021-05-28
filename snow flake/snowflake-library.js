
// call function
Snow();

// Generate 50 Snowflakes
function Snow() {
    for (let i = 0; i < 50; i++) {
    SnowFlake.push(NewSnow());
    }
}


// Draw/ move snowflakes
function NewSnow(InitX, InitY, InitR, InitV) {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 10),
        v: randomDec(3, 5)
    }
}

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