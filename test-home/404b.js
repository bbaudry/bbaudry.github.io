
var cnv, w, h
var leftmargin, topmargin, rightmargin, bottommargin, actualwidth, actualheight, pad
var font, fSize


function preload(){
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
}

/*404 in binary, needs 9 bits: 110 010 100*/
function draw() {
    background(0, 0, 0)
    stroke(0, 0, 100)
    fill(0, 0, 100)
    textFont(font)
    textSize(actualheight*0.8)
    var msg="404"
    var x=leftmargin+(actualwidth-textWidth(msg))*0.5
    //text("404",x,bottommargin*0.8)
      // Get the point array.
  let points = font.textToPoints("404",x,bottommargin*0.8, actualheight*0.8,{ sampleFactor:  0.02 });

  // Draw a dot at each point.
  for (let p of points) {
    //ellipse(p.x,p.y,5,5)
    rect(p.x,p.y,actualwidth*0.029,actualwidth*0.029)
  }

    noLoop()
}