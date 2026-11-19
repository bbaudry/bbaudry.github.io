let w, h, cnv, font, x

function preload() {
    font = loadFont("../fonts/officecodepro-regular.otf");
}

function setup(){
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    cnv = createCanvas(w, h)
    colorMode(HSB, 360, 100, 100, 250);
    x=0
}

function draw(){
background(0,0,0)
    let y1,y2
    x<w?x++:x=0
    y1=0
    y2=h
    stroke(0,100,100)
    line(x,y1,x,y2)
}

function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
