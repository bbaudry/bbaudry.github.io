
var cnv, w, h
var leftmargin, topmargin, rightmargin, bottommargin, actualwidth, actualheight, pad
var font, fSize, palette, p
var pixs = []

function preload() {
    font = loadFont("./fonts/terminal-grotesque.ttf");
    font = loadFont("./fonts/MapleMono-ExtraBold.ttf");
    
//    font = loadFont("./oreon.ttf");
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
    textFont(font)
    fSize=Math.floor(actualheight*0.6)
    textSize(fSize)
    palette=[[300,180],[180,300],[30,220],[220,30],[50,250],[250,50],[0,180],[180,0],[60,240]]
        p=random(palette)

}

function draw() {
    
    let m,x,b,h
    b=p[0]
    h=p[1]
    background(b, 100, 100)
    fill(h, 100, 80)
    noStroke()
    m="merry"
    x="xmas"
    xpos_m=leftmargin+(actualwidth-textWidth(m))*0.5
    xpos_x=leftmargin+(actualwidth-textWidth(x))*0.5
    text("happy",xpos_m,actualheight*0.5)
    text("2026",xpos_x,bottommargin)
    if((mouseX>leftmargin+actualwidth*0.48 && mouseX<leftmargin+actualwidth*0.52)&&(mouseY>topmargin+actualheight*0.48 && mouseY<topmargin+actualheight*0.52)){
        p=random(palette)
    }
//    noLoop()
}

