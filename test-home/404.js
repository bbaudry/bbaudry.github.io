
var cnv, w, h

function setup() {
    w=windowWidth
    h=windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
}

function draw() {
    background(0,0,0)
    noStroke()
    fill(0,0,100)
    quad(w*0.5-w*0.2,h*0.5-h*0.05,
        w*0.5+w*0.2,h*0.5-h*0.05,
        w*0.5+w*0.2,h*0.5+h*0.05,
        w*0.5-w*0.2,h*0.5+h*0.05,
    )
    drawone(w*0.3,h*0.6,w*0.2,h*0.2)
    noLoop()
}

function drawone(x,y,cellw,cellh){
    push()
    translate(x,y)
    rect(cellw/3,0,cellw/3,cellh)
    pop()
}

function windowResized() {
    w=windowWidth
    h=windowHeight
    resizeCanvas(w, h);
    setCanvasSize()
}

