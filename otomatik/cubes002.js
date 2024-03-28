var xoff = 0.0
var yoff1 = 0.0
var yoff2 = 0.0
var yoff3 = 0.0
var font

function savesvg() {
    save("cubes002.svg");
}

function savepng() {
    save("cubes002.png");
}

function preload() {
    font = loadFont("./fonts/1CAMBam_Stick_9.ttf");
}

function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    //frames()
    drawcubes()
    credits()
    noLoop()
}

function frames() {
    strokeWeight(3);
    rect(0, 0, w, h);
    quad(leftmargin, topmargin, rightmargin, topmargin, rightmargin, bottommargin, leftmargin, bottommargin)
    strokeWeight(1);

}

function drawcubes() {
    var bend = 0.42
    var offset = 3
    var size = 0.022
    grid_cubes(offset, bend, size)
    grid_tiles(offset, bend, size)
}

/* offset controls the distance between the cubes 
*  bend controls the orientation of the cube
*  size controls the size of the cubes
*/
function grid_cubes(offset, bend, size) {
    var x, y
    var initstep = size * actualwidth
    var step = initstep
    var halfx = actualwidth * 0.5
    var halfy = actualheight * 0.5
    for (var yglobal = topmargin ; yglobal < bottommargin - 2 * initstep; yglobal += (1 + 2 * bend) * initstep + offset) {
        for (var xglobal = leftmargin; xglobal < rightmargin - 2 * initstep; xglobal += 2 * initstep + offset) {
            y = yglobal + initstep
            x = xglobal
            for (var i = 1; i > 0; i -= 0.23) {
                step = initstep * i
                x = xglobal + (1 - i) * initstep
                if (random() < (y - topmargin) / halfy && random() < (bottommargin - y) / halfy && random() < (rightmargin - x) / halfx && random() < (x - leftmargin) / halfx) {
                    drawoneportion(x, y, x + step, y + bend * step, x + step, y + (1 + bend) * step, x, y + step)
                    drawoneportion(x + step, y + bend * step, x + 2 * step, y, x + 2 * step, y + step, x + step, y + (1 + bend) * step)
                    drawoneportion(x, y, x + step, y - bend * step, x + 2 * step, y, x + step, y + bend * step)
                }
            }
        }
    }
}

function grid_tiles(offset, bend, size) {
    var x, y
    var initstep = size * actualwidth
    var step = initstep
    var halfx = actualwidth * 0.5
    var halfy = actualheight * 0.5

    for (var yglobal = topmargin + initstep * (1 + bend) + offset / 2; yglobal < bottommargin - 2 * initstep; yglobal += (1 + 2 * bend) * initstep + 1 * offset) {
        for (var xglobal = leftmargin + initstep + offset / 2; xglobal < rightmargin - 3 * initstep; xglobal += 2 * initstep + offset) {
            step = initstep
            y = yglobal + step
            x = xglobal
            if (random() < (y - topmargin) / halfy && random() < (bottommargin - y) / halfy && random() < (rightmargin - x) / halfx && random() < (x - leftmargin) / halfx) {
                quad(x, y, x + step, y - bend * step, x + 2 * step, y, x + step, y + bend * step)
            }
        }
    }
}

function drawoneportion(x1, y1, x2, y2, x3, y3, x4, y4) {
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
}

function credits() {
    var fSize = 17
    textFont(font)
    textSize(fSize)
    var x = leftmargin
    var y = bottommargin + fSize*2
    var c = "float[00000010]. al.my.re. march 2024"
    text(c, x, y)
    x = leftmargin
    y += fSize * 1.2
    c = "performance with uunatek h3, laptop, projector // p5.js, noise, juicy-gcode, gcode-cli, gcode",
        text(c, x, y)

}

