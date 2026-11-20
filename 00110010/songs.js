let w, h, cnv, font, fontsize, x, y1, y2, songs

function preload() {
    font = loadFont("../fonts/officecodepro-regular.otf");
    songs = []
    loadTable('./50songs.csv', ',', 'header', (table) => {
        // Build an array of [artist, song] pairs
        for (let row of table.getRows()) {
            songs.push([row.getString('artist'), row.getString('song')]);
        }

        // Fisher-Yates shuffle
        for (let i = songs.length - 1; i > 0; i--) {
            let j = floor(random(i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
    });
}

function prep(data) {
    console.log(data.getRowCount())
}

async function setup() {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    cnv = createCanvas(w, h)
    colorMode(HSB, 360, 100, 100, 250);
    //songs=await loadTable('./50songs.csv', ',','header');
    shuffle(songs, true)
    x = 0
    y1 = 0
    y2 = h
    fontsize = 21
    textSize(fontsize)
    textFont(font)
}

function draw() {
    background(0, 0, 0)
    writesongs()
    if(x < w){x++}else{x = 0;shuffle(songs,true)}
    stroke(0, 100, 100)
    line(x, y1, x, y2)
}

function writesongs() {
    let artist, song, cx, artistx, songx, pad, y
    fill(0, 0, 100)
    noStroke()
    pad = 7
    cx = w * 0.5
    let maxtextheight = songs.length*fontsize
    if(h>maxtextheight){
        y=(h-maxtextheight)/2
    }
    else{
        y=fontsize
    }
    for (let i = 0; i < songs.length; i++) {
        artist = songs[i][0] + " "
        song = songs[i][1]
        artistx = cx - pad - textWidth(artist)
        songx = cx + pad
        x>artistx&&x<cx-pad?fill(0,100,100):fill(0,0,100)
        text(artist, artistx, y)
        x>cx+pad&&x<songx+textWidth(song)?fill(0,100,100):fill(0,0,100)
        text(song, songx, y)
        y += fontsize
    }


}

function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
