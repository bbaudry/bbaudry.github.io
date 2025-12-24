let w, h, cnv, font1, font2, font3, font4, hues, margin, counter, onelettertime, phrasenoel, iphrasenoel, phrasekdo1, iphrasekdo1, phrasekdo2, iphrasekdo2

function preload() {
    font1 = loadFont("./fonts/OfficeCodeProD-Bold.otf");
    font2 = loadFont("./fonts/officecodepro-regular.otf");
    font3 = loadFont("./fonts/terminal-grotesque.ttf");
    font4 = loadFont("./fonts/terminal-grotesque_open.otf");
}

function setup() {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    cnv = createCanvas(w, h)
    colorMode(HSB, 360, 100, 100, 250);
    hues = [100, 330]
    counter = 0
    onelettertime = 10
    margin = w*0.02
    phrasenoel = "joyeux noel!"
    iphrasenoel = 0
    phrasekdo1 = "vous êtes attendus au pont"
    iphrasekdo1 = 0
    phrasekdo2 = "d'acigné le 31 décembre à 12.30"
    iphrasekdo2 = 0
    phrasekdo3 = "bon appétit !!!!"
    iphrasekdo3 = 0
}

function draw() {
    let fSize
    fSize = Math.floor((w-margin*2) / phrasenoel.length)
    hu = random(hues)
    fill(hu, 100, 100)
    stroke(hu, 100, 100)
    textSize(fSize)
    textFont(font3)
    if (counter % onelettertime == 0) {
        if (iphrasenoel < phrasenoel.length) {
            text(phrasenoel.charAt(iphrasenoel), margin + iphrasenoel * fSize, h * 0.2)
            iphrasenoel++
        }
        else {
            textFont(font2)
            fSize = Math.floor((w-margin*2) / phrasekdo1.length)
            textSize(fSize)
            if (iphrasekdo1 < phrasekdo1.length) {
                text(phrasekdo1.charAt(iphrasekdo1), margin + iphrasekdo1 * fSize, h * 0.5)
                iphrasekdo1++
            }
            else {
                fSize = Math.floor((w-margin*2) / phrasekdo2.length)
                textSize(fSize)
                if (iphrasekdo2 < phrasekdo2.length) {
                    text(phrasekdo2.charAt(iphrasekdo2), margin + iphrasekdo2 * fSize, h * 0.7)
                    iphrasekdo2++
                }
                else {
                    fSize = Math.floor((w-margin*2) / phrasekdo3.length)
                    textSize(fSize)
                    if (iphrasekdo3 < phrasekdo3.length) {
                        text(phrasekdo3.charAt(iphrasekdo3), margin + iphrasekdo3 * fSize, h * 0.9)
                        iphrasekdo3++
                    }
                }
            }
        }
    }
    counter++
}

function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
