
var cnv, w, h

function setup(){
    w=windowWidth
    h=windowHeight
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("left-side");
    colorMode(HSB,360,100,100,250)
}

function draw(){
    background(0,0,0)
    console.log("draw")
    vera()
    noLoop()
}

function vera(){
    var size,hsize,off,res,blanc
    res=Math.floor(random(2,5))
    off=0//random(0.1,0.2)*w
    blanc=true
    size = w * 0.9
    hsize = size * 0.5
    for(var i=0;i<res;i++){
        if(blanc){fill(0, 100, 100);blanc=false}
        else{fill(0, 0, 0);blanc=true}
        quad(w * 0.5 - hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 - hsize + random(-off, off),
            w * 0.5 + hsize + random(-off, off), h * 0.5 + hsize + random(-off, off),
            w * 0.5 - hsize + random(-off, off), h * 0.5 + hsize + random(-off, off))
        hsize -= size * 0.05

    }
}