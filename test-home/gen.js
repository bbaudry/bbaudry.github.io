
// generative page on the left side of personal website
var cnv, w, h

function setup() {
    w=42
    h=42
    cnv = createCanvas(w, h);
    cnv.parent("left-side");
    setCanvasSize()
    console.log("w: " + w + "; h: " + h)

    colorMode(HSB, 360, 100, 100, 250);
}

async function setCanvasSize() {
    var element = await document.getElementById("left-side");
    var positionInfo = element.getBoundingClientRect();
    var divh = positionInfo.height;
    var divw = positionInfo.width;
    w = divw
    h = divh
    resizeCanvas(w, h)
}

function draw() {
    // add 1% chance hommage a vera molnar: randomly positioned squares in different shades of red
    // add 1% chance hommage a lillian schwartz
    // add 1% chance hommage a ryoji ikeda: a grid, cell randomly filled with white or white particles bursting from center on black background or black particles bursting from center on white background 
    if (random() < 0.042) {
        lillianschwartz()
    }
    else {
        SEorART()
    }
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

function SEorART() {
    var x, y, res, cellw, cellh, left, style, c, colorie
    background(0, 0, 0)
    res = random([6, 12, 18])
    cellw = w / res
    cellh = h / res
    //t=à draw art else draw se
    style = random([0, 1, 2, 3, 4])
    colorie = false
    switch (style) {
        case 0://draw ART
            c = 1
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    colorie = colorieOUpas(colorie)
                    switch (c) {
                        case 1:
                            drawAnA(x, y, cellw, cellh, 0.11)
                            c = 2
                            break;
                        case 2:
                            drawAnR(x, y, cellw, cellh, 0.11)
                            c = 3
                            break;
                        case 3:
                            drawAnT(x, y, cellw, cellh, 0.11)
                            c = 1
                            break;
                    }
                }
            }
            break;
        case 1://draw SE
            left = true
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    colorie = colorieOUpas(colorie)
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
        case 2://opart rectangles
            left = true
            for (var i = 0; i < res; i++) {
                y = i * cellh
                colorie = colorieOUpas(colorie)
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    rect(x, y, (cellw / res) * i, (cellh / res) * j)
                }
            }
            break;
        case 3://opart rectangles miroir
            left = true
            for (var i = 0; i < res; i++) {
                y = (res - i) * cellh
                colorie = colorieOUpas(colorie)
                for (var j = 0; j < res; j++) {
                    x = (res - j) * cellw
                    rect(x, y, (cellw / res) * i, (cellh / res) * j)
                }
            }
            break;
        case 4://draw ART
            c = 1
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    colorie = colorieOUpas(colorie)
                    switch (c) {
                        case 1:
                            drawAnT(x, y, cellw, cellh, 0.11)
                            c = 2
                            break;
                        case 2:
                            drawAnRmiroir(x, y, cellw, cellh, 0.11)
                            c = 3
                            break;
                        case 3:
                            drawAnA(x, y, cellw, cellh, 0.11)
                            c = 1
                            break;
                    }
                }
            }
            break;
        case 5://draw SE miroir
            left = true
            for (var i = 0; i < res; i++) {
                y = i * cellh
                for (var j = 0; j < res; j++) {
                    x = j * cellw
                    colorie = colorieOUpas(colorie)
                    if (left) {
                        drawAnEmiroir(x, y, cellw, cellh, 0.11)
                    }
                    else {
                        drawAnSmiroir(x, y, cellw, cellh, 0.11)
                    }
                    left = !left
                }
            }
            break;
    }
}

function colorieOUpas(colorie) {
    if (!colorie && random() < 0.03) {
        colorie = true
        fill(110, 100, 80)
        stroke(110, 100, 80)
    }
    else {
        fill(0, 0, 100)
        stroke(0, 0, 100)
    }
    return colorie
}

function drawAnS(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
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

function drawAnSmiroir(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x + cw - splitw, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    y += splith
    rect(x, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
}

function drawAnE(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
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


function drawAnEmiroir(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x + cw - splitw, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    y += splith
    rect(x + cw - splitw, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
}

function drawAnA(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
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

function drawAnRmiroir(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
    cw = (1 - off) * cellw
    ch = (1 - off) * cellh
    x += off * cellw
    y += off * cellh
    res = 5
    splitw = cw / res
    splith = ch / res
    rect(x, y, cw, splith)
    y += splith
    rect(x + cw - splitw, y, splitw, splith * 4)
    rect(x, y, splitw, splith)
    y += splith
    rect(x, y, cw, splith)
    quad(x + 1 * splitw, y, x + 2 * splitw, y, x + 1 * splitw, y + 3 * splith, x + 0 * splitw, y + 3 * splith)
}

function drawAnT(x, y, cellw, cellh, off) {
    var cw, cellh, res, splitw, splith, off
    off = 0.11
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

var grid = [];
var gridresolution = 8;

function lillianschwartz() {
    background(0, 0, 100)
    fill(0, 0, 0)
    stroke(0, 0, 0)
    initgrid()
    drawgrid()
}

function initgrid() {
    var cellwidth = Math.floor(w / gridresolution)
    var cellheight = Math.floor(h / gridresolution)
    var x, y
    var xcoords = []
    var ycoords = []
    var xoffset = cellwidth * 0.42
    var yoffset = cellheight * 0.42
    for (var i = 0; i < gridresolution + 1; i++) {
        x = 0 + i * cellwidth
        if (i > 0 && i < gridresolution) { x += random(-xoffset, xoffset) }
        xcoords.push(x)
    }
    for (var j = 0; j < gridresolution + 1; j++) {
        y = 0 + j * cellheight
        if (j > 0 && j < gridresolution) { y += random(-yoffset, yoffset) }
        ycoords.push(y)
    }
    for (var i = 0; i < gridresolution + 1; i++) {
        x = xcoords[i]
        for (var j = 0; j < gridresolution + 1; j++) {
            y = ycoords[j]
            grid.push({ x: x, y: y })
        }
    }
}

function drawgrid() {
    for (var i = 0; i < gridresolution; i++) {
        for (var j = 0; j < gridresolution; j++) {
            tile(
                grid[i * (gridresolution + 1) + j].x, grid[i * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j].x, grid[(i + 1) * (gridresolution + 1) + j].y,
                grid[(i + 1) * (gridresolution + 1) + j + 1].x, grid[(i + 1) * (gridresolution + 1) + j + 1].y,
                grid[i * (gridresolution + 1) + j + 1].x, grid[i * (gridresolution + 1) + j + 1].y,
            )
        }
    }
}

function tile(x1, y1, x2, y2, x3, y3, x4, y4) {
    var dice = Math.floor(random(4))
    switch (dice) {
        // don't draw the quad
        case 0:
            break;
        // draw complete quad
        case 1:
            quad(x1, y1, x2, y2, x3, y3, x4, y4)
            break;
        // split the quad horizontal
        case 2:
            var ratio = Math.floor(random(2, 5))
            var yoff = (y4 - y1) / ratio
            for (var i = 0; i < ratio; i += 2) {
                quad(x1, y1 + i * yoff, x2, y2 + i * yoff, x3, y2 + (i + 1) * yoff, x4, y1 + (i + 1) * yoff)
            }
            break;
        // split the quad horizontal
        case 3:
            var ratio = Math.floor(random(2, 4))
            var xoff = (x2 - x1) / ratio
            for (var i = 0; i < ratio; i += 2) {
                quad(x1 + i * xoff, y1, x1 + (i + 1) * xoff, y2, x4 + (i + 1) * xoff, y3, x4 + i * xoff, y4)
            }
            break;
    }
}
;

function windowResized() {
    setCanvasSize()
}

