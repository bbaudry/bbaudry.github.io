
var cnv, w, h
var leftmargin, topmargin, rightmargin, bottommargin, actualwidth, actualheight, pad
var font, fSize
var pixs = []

function preload() {
    font = loadFont("ChunkFive-Regular.otf")
  }
  
function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
    leftmargin = w * 0.15
    topmargin = h * 0.05
    rightmargin = w * 0.85
    bottommargin = h * 0.95
    pad = w * 0.003
    actualwidth = rightmargin - leftmargin
    actualheight = bottommargin - topmargin
    background(0, 0, 0)
    stroke(0, 0, 100)
    fill(0, 0, 100)
    draw404()
    textFont(font)
    textSize(actualheight * 0.8)
    var msg = "404"
    var x = leftmargin + (actualwidth - textWidth(msg)) * 0.5
    //text("404",x,bottommargin*0.8)
    // Get the point array.
    let points = font.textToPoints("404", x, bottommargin * 0.8, actualheight * 0.8, { sampleFactor: 0.02 });
  
    // Draw a dot at each point.
    for (let p of points) {
      //rect(p.x, p.y, actualwidth * 0.029, actualwidth * 0.029)
      var pix = new Pix(p.x, p.y, actualwidth * 0.029, actualwidth * 0.029)
      pixs.push(pix)
  
    }
    fill(110, 100, 80)
    noStroke()
  
}

/*404 in binary, needs 9 bits: 110 010 100*/
function draw() {
    for (i in pixs) {
        pixs[i].show()
      }
    }

function draw404(){
    background(0, 0, 0)
    var dice = Math.floor(random(8))
    switch (dice) {
        case 0: topleftrows()
            break;
        case 1: topleftcolumns()
            break;
        case 2: toprightcolumns()
            break;
        case 3: toprightrows()
            break;
        case 4: bottomrightrows()
            break;
        case 5: bottomrightcolumns()
            break;
        case 6: bottomleftcolumns()
            break;
        case 7: bottomleftrows()
            break;

    }
}

function topleftrows() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(leftmargin * 0.5, topmargin, leftmargin, topmargin)

    drawone(leftmargin, topmargin, cellw, cellh);
    drawone(leftmargin + cellw, topmargin, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin, cellw, cellh);

    drawzero(leftmargin, topmargin + cellh, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);

    drawone(leftmargin, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
}

function topleftcolumns() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(leftmargin, topmargin * 0.5, leftmargin, topmargin)

    drawone(leftmargin, topmargin, cellw, cellh);
    drawone(leftmargin, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh * 2, cellw, cellh);

    drawzero(leftmargin + cellw, topmargin, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);

    drawone(leftmargin + 2 * cellw, topmargin, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
}

function toprightcolumns() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(rightmargin, topmargin * 0.5, rightmargin, topmargin)

    drawone(leftmargin + 2 * cellw, topmargin, cellw, cellh);
    drawone(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);

    drawzero(leftmargin + cellw, topmargin, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);

    drawone(leftmargin, topmargin, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh * 2, cellw, cellh);
}

function toprightrows() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(rightmargin, topmargin, rightmargin + leftmargin * 0.5, topmargin)

    drawone(leftmargin + 2 * cellw, topmargin, cellw, cellh);
    drawone(leftmargin + cellw, topmargin, cellw, cellh);
    drawzero(leftmargin, topmargin, cellw, cellh);

    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh, cellw, cellh);

    drawone(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh * 2, cellw, cellh);
}

function bottomrightrows() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(rightmargin, bottommargin, rightmargin + leftmargin * 0.5, bottommargin)

    drawone(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh * 2, cellw, cellh);

    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh, cellw, cellh);

    drawone(leftmargin + 2 * cellw, topmargin, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin, cellw, cellh);
    drawzero(leftmargin, topmargin, cellw, cellh);
}

function bottomrightcolumns() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(rightmargin, bottommargin + topmargin * 0.5, rightmargin, bottommargin)

    drawone(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin, cellw, cellh);

    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin, cellw, cellh);

    drawone(leftmargin, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin, cellw, cellh);
}

function bottomleftcolumns() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(leftmargin, bottommargin + topmargin * 0.5, leftmargin, bottommargin)

    drawone(leftmargin, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin, topmargin, cellw, cellh);

    drawzero(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin, cellw, cellh);

    drawone(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin, cellw, cellh);
}

function bottomleftrows() {
    var cellw, cellh
    cellw = actualwidth / 3
    cellh = actualheight / 3

    line(leftmargin * 0.5, bottommargin, leftmargin, bottommargin)

    drawone(leftmargin, topmargin + cellh * 2, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh * 2, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh * 2, cellw, cellh);

    drawzero(leftmargin, topmargin + cellh, cellw, cellh);
    drawone(leftmargin + cellw, topmargin + cellh, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin + cellh, cellw, cellh);

    drawone(leftmargin, topmargin, cellw, cellh);
    drawzero(leftmargin + cellw, topmargin, cellw, cellh);
    drawzero(leftmargin + 2 * cellw, topmargin, cellw, cellh);
}



function drawone(x, y, cellw, cellh) {
    push()
    cellw = cellw - pad * 2
    cellh = cellh - pad * 2
    translate(x, y)
    rect(pad + cellw * 0.4, pad, cellw * 0.2, cellh)
    pop()
}

function drawzero(x, y, cellw, cellh) {
    push()
    cellw = cellw - pad * 2
    cellh = cellh - pad * 2
    translate(x, y)
    rect(pad, pad, cellw, cellh * 0.2)
    rect(pad, pad + cellh * 0.2, cellw * 0.2, cellh * 0.8)
    rect(pad + cellw * 0.8, pad + cellh * 0.2, cellw * 0.2, cellh * 0.8)
    rect(pad, pad + cellh * 0.8, cellw, cellh * 0.2)
    pop()
}

function windowResized() {
    w = windowWidth
    h = windowHeight
    resizeCanvas(w, h);
    setCanvasSize()
}


function windowResized() {
    w = windowWidth
    h = windowHeight
    resizeCanvas(w, h)
  }
  
  class Pix {
    constructor(x, y, w, h) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.r = w * 0.3
      this.done = false
    }
  
    show() {
      var lx, ly
      if (!this.done) {
        lx = mouseX
        ly = mouseY
        if (lx > this.x && lx < this.x + this.w && ly > this.y && ly < this.y + this.h) {
          rect(this.x, this.y, this.w, this.h)
          this.done=true
        }
      }
    }
  }