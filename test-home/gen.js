
var cnv, w, h

function setup() {
    var element = document.getElementById("left-side");
    var positionInfo = element.getBoundingClientRect();
    var divh = positionInfo.height;
    var divw = positionInfo.width;
    w = divw
    h = divh
    cnv = createCanvas(w, h);
    cnv.parent("left-side");

    colorMode(HSB, 360, 100, 100, 250);
}

function draw() {
    seORart()
    noLoop()
}

function vera() {
    var size, hsize, off, res, blanc
    background(0, 0, 0)
    res = Math.floor(random([3, 5, 7]))
    off = random(0.01, 0.05) * w
    blanc = true
    size = w * 0.9
    hsize = size * 0.5
    noStroke()
    for (var i = 0; i < res; i++) {
        if (blanc) { fill(0, 0, 100); blanc = false }
        else { fill(0, 0, 0); blanc = true }
        quad(w * 0.5 - hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 + hsize + random(-off, off),
            w * 0.5 - hsize + random(-off, off), h * 0.5 + hsize + random(-off, off))
        hsize -= size * 0.05
    }
}

function seORart() {
    var x, y, res, cellw, cellh, left, style, c
    background(0, 0, 0)
    res = random([6, 12, 18])
    cellw = w / res
    cellh = h / res
    //t=à draw art else draw se
    style = random([0, 1, 2])
    switch(style){
        case 0:
            c = 1
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    fill(0, 0, 100)
                    //            rect(x,y,10*i,10*j)
                    switch (c) {
                        case 1: 
                            drawAnA(x, y, cellw, cellh, 0.11)
                            c=2
                            break;
                        case 2:
                            drawAnR(x, y, cellw, cellh, 0.11)
                            c=3
                            break;
                        case 3:
                            drawAnT(x, y, cellw, cellh, 0.11)
                            c=1
                            break;
                    }
                }
            }
            break;
        case 1:
            left = true
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    fill(0, 0, 100)
                    if (left) {
                        drawAnS(x, y, cellw, cellh, 0.11)
                    }
                    else {
                        drawAnE(x, y, cellw, cellh, 0.11)
                    }
                    left = !left
                }
            }    
            break;
        case 2:
            left = true
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    fill(0, 0, 100)
                    rect(x,y,(cellw/res)*i,(cellh/res)*j)
                }
            }    
            break;
    }
}

function drawAnS(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    stroke(0, 0, 100)
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    y += splith
    rect(x + cw - splitw, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
}

function drawAnE(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    stroke(0, 0, 100)
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
}

function drawAnA(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    stroke(0, 0, 100)
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith * 4)
    rect(x + cw - splitw, y, splitw, splith * 4)
    y += splith
    rect(x, y, cw, splith)
}

function drawAnR(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    stroke(0, 0, 100)
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith * 4)
    rect(x + cw - splitw, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    quad(x + 3 * splitw, y, x + 4 * splitw, y, x + 5 * splitw, y + 3 * splith, x + 4 * splitw, y + 3 * splith)
}

function drawAnT(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    stroke(0, 0, 100)
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    x += 2 * splitw
    rect(x, y, splitw, splith * 4)
}

function windowResized() {
    var element = document.getElementById("left-side");
    var positionInfo = element.getBoundingClientRect();
    var divh = positionInfo.height;
    var divw = positionInfo.width;
    w = divw
    h = divh
    resizeCanvas(w, h);
}

