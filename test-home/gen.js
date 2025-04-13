
var cnv, w, h

function setup(){
    var element = document.getElementById("left-side");
    var positionInfo = element.getBoundingClientRect();
    var divh = positionInfo.height;
    var divw = positionInfo.width;
    w=divw
    h=divh
    cnv = createCanvas(w, h);
    cnv.parent("left-side");
    
    colorMode(HSB, 360, 100, 100, 250);
}

function draw(){
    vera()
    noLoop()
}

function vera(){
    var size,hsize,off,res,blanc
    background(0,0,0)
    res=Math.floor(random(2,5))
    off=random(0.01,0.05)*w
    blanc=true
    size = w * 0.9
    hsize = size * 0.5
    noStroke()
    for(var i=0;i<res;i++){
        if(blanc){fill(0, 0, 100);blanc=false}
        else{fill(0, 0, 0);blanc=true}
        quad(w * 0.5 - hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 + hsize + random(-off, off),
            w * 0.5 - hsize + random(-off, off), h * 0.5 + hsize + random(-off, off))
        hsize -= size * 0.05

    }
}

function windowResized() {
    var element = document.getElementById("left-side");
    var positionInfo = element.getBoundingClientRect();
    var divh = positionInfo.height;
    var divw = positionInfo.width;
    w=divw
    h=divh
    resizeCanvas(w, h);
}
