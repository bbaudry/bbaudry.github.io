
var cnv, w, h
var leftmargin, topmargin, rightmargin, bottommargin, actualwidth, actualheight, pad

function setup() {
    w=windowWidth
    h=windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
    leftmargin = w*0.15
    topmargin = h*0.05
    rightmargin = w*0.85
    bottommargin = h*0.95
    pad = w*0.003
    actualwidth = rightmargin-leftmargin
    actualheight = bottommargin-topmargin
}

/*404 in binary, needs 9 bits: 110 010 100*/
function draw() {
    background(0,0,0)
    stroke(0,0,100)
    fill(0,0,100)
    toprightrows()
    noLoop()
}

function topleftrows(){
    var cellw,cellh
    cellw=actualwidth/3
    cellh=actualheight/3

    line(leftmargin*0.5,topmargin,leftmargin,topmargin)

    drawone(leftmargin,topmargin,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin,cellw,cellh);

    drawzero(leftmargin,topmargin+cellh,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin+cellh,cellw,cellh);

    drawone(leftmargin,topmargin+cellh*2,cellw,cellh); 
    drawzero(leftmargin+cellw,topmargin+cellh*2,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin+cellh*2,cellw,cellh);
}

function topleftcolumns(){
    var cellw,cellh
    cellw=actualwidth/3
    cellh=actualheight/3

    line(leftmargin,topmargin*0.5,leftmargin,topmargin)

    drawone(leftmargin,topmargin,cellw,cellh); 
    drawone(leftmargin,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin,topmargin+cellh*2,cellw,cellh);

    drawzero(leftmargin+cellw,topmargin,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin+cellw,topmargin+cellh*2,cellw,cellh);

    drawone(leftmargin+2*cellw,topmargin,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin+cellh*2,cellw,cellh);
}

function toprightcolumns(){
    var cellw,cellh
    cellw=actualwidth/3
    cellh=actualheight/3

    line(rightmargin,topmargin*0.5,rightmargin,topmargin)

    drawone(leftmargin+2*cellw,topmargin,cellw,cellh); 
    drawone(leftmargin+2*cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin+2*cellw,topmargin+cellh*2,cellw,cellh);

    drawzero(leftmargin+cellw,topmargin,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin+cellw,topmargin+cellh*2,cellw,cellh);

    drawone(leftmargin,topmargin,cellw,cellh); 
    drawzero(leftmargin,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin,topmargin+cellh*2,cellw,cellh);
}

function toprightrows(){
    var cellw,cellh
    cellw=actualwidth/3
    cellh=actualheight/3

    line(rightmargin,topmargin,rightmargin+leftmargin*0.5,topmargin)

    drawone(leftmargin+2*cellw,topmargin,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin,cellw,cellh); 
    drawzero(leftmargin,topmargin,cellw,cellh);

    drawzero(leftmargin+2*cellw,topmargin+cellh,cellw,cellh); 
    drawone(leftmargin+cellw,topmargin+cellh,cellw,cellh); 
    drawzero(leftmargin,topmargin+cellh,cellw,cellh);

    drawone(leftmargin+2*cellw,topmargin+cellh*2,cellw,cellh); 
    drawzero(leftmargin+cellw,topmargin+cellh*2,cellw,cellh); 
    drawzero(leftmargin,topmargin+cellh*2,cellw,cellh);
}


function drawone(x,y,cellw,cellh){
    push()
    cellw=cellw-pad*2
    cellh=cellh-pad*2
    translate(x,y)
    rect(pad+cellw*0.4,pad,cellw*0.2,cellh)
    pop()
}

function drawzero(x,y,cellw,cellh){
    push()
    cellw=cellw-pad*2
    cellh=cellh-pad*2
    translate(x,y)
    rect(pad,pad,cellw,cellh*0.2)
    rect(pad,pad+cellh*0.2,cellw*0.2,cellh*0.8)
    rect(pad+cellw*0.8,pad+cellh*0.2,cellw*0.2,cellh*0.8)
    rect(pad,pad+cellh*0.8,cellw,cellh*0.2)
    pop()
}

function windowResized() {
    w=windowWidth
    h=windowHeight
    resizeCanvas(w, h);
    setCanvasSize()
}

