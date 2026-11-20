let w, h, cnv, font, x, y1, y2, songs

function preload() {
    font = loadFont("../fonts/officecodepro-regular.otf");
    
}

async function setup(){
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    cnv = createCanvas(w, h)
    colorMode(HSB, 360, 100, 100, 250);
    songs=await loadTable('./50songs.csv', ',');
    x=0
    y1=0
    y2=h
}

function initsongs(){

}

function draw(){
    console.log(songs.getRow(0).getString(1))
background(0,0,0)
    x<w?x++:x=0
    stroke(0,100,100)
    line(x,y1,x,y2)
}

function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
