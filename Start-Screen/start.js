let rez =100;
let Rog;
let Wiz;
let Kni;
let Mis;
let textTitle;
let textRog;
let textWiz;
let textKni;
let textMis;
let interval;
let tracer = 0;
let count = 0;
// image arrays and font variables
let rouge = [];
let wizard = [];
let knight = [];
let mischievous = [];
let Tfont;

function preload() {
    rouge[0] = loadImage('../pngs/Rogue-Sprite/Rog-standing-Normalized.png');
    rouge[1] = loadImage('../pngs/Rogue-Sprite/Rog-idle-Normalized.png');
    rouge[2] = loadImage('../pngs/Rogue-Sprite/Rog-talk1-Normalized.png');
    rouge[3] = loadImage('../pngs/Rogue-Sprite/Rog-talk2-normalized.png');
    wizard[0] = loadImage('../pngs/Wizard-Sprite/Wiz-standing-normalized.png');
    wizard[1] = loadImage('../pngs/Wizard-Sprite/Wiz-idle-normalized.png');
    wizard[2] = loadImage('../pngs/Wizard-Sprite/Wiz-talk1-normalized.png');
    wizard[3] = loadImage('../pngs/Wizard-Sprite/Wiz-talk2-normalized.png');
    knight[0] = loadImage('../pngs/Knight-Sprite/Kni-standing-Normalized.png');
    knight[1] = loadImage('../pngs/Knight-Sprite/Kni-idle-Normalized.png');
    knight[2] = loadImage('../pngs/Knight-Sprite/Kni-Tal1-Normalized.png');
    knight[3] = loadImage('../pngs/Knight-Sprite/Kni-Talk2-Normalized.png');
    mischievous[0] = loadImage('../pngs/Mischievous-Sprite/Mis-standing-Normalized.png');
    mischievous[1] = loadImage('../pngs/Mischievous-Sprite/Mis-idle-Normalized.png');
    mischievous[2] = loadImage('../pngs/Mischievous-Sprite/Mis-Talk1-Normalized.png');
    mischievous[3] = loadImage('../pngs/Mischievous-Sprite/Mis-Talk2-Normalized.png');

    Tfont = loadFont("../Chroma-font/Chromaletter_OTF/Chromaletter-Combo.otf")
}

function setup(){
    createCanvas(1400, 700);
    frameRate(20);
    textFont(Tfont);
    Rog = new Rouge();
    Wiz = new Wizard();
    Kni = new Knight();
    Mis = new Mischievous();
    textTitle = new Text(3.25,1,'Select Your Character',1);
    textRog = new Text(1.7,5.5,"Rouge",0.75);
    textKni = new Text(4.6,5.5,"Knight",0.75);
    textMis = new Text(6.85,5.5,"Mischievous",0.75);
    textWiz = new Text(10.6,5.5,"Wizard",0.75);
}

// interval timer to rotate selected animation (see show() in specific classes for usage)
function preview(){
    clearInterval(interval);
    count = 0;
    interval = setInterval(function(){
        if(count === 0){
            count = 1;
        }else {
            count = 0;
        }
    },500)
}


function  keyPressed(){
    noLoop();
    clear();
}
// "*100" is because the scale(rez) isn't applying to this function for some reason ¯\_(ツ)_/¯
function mouseClicked(){
    if((mouseX > Rog.body.x*rez && mouseX < Rog.body.x*rez + 3*rez) && (mouseY > Rog.body.y*rez && mouseY < Rog.body.y*rez +3*rez)){
        print("Rouge");
        tracer = 1;
        preview();
    } else if((mouseX > Wiz.body.x*rez && mouseX < Wiz.body.x*rez + 3*rez) && (mouseY > Wiz.body.y*rez && mouseY < Wiz.body.y*rez +3*rez)){
        print('Wizard');
        tracer = 4;
        preview();
    } else if((mouseX > Kni.body.x*rez && mouseX < Kni.body.x*rez + 3*rez) && (mouseY > Kni.body.y*rez && mouseY < Kni.body.y*rez +3*rez)){
        print("Knight");
        tracer = 2;
        preview();
    } else if((mouseX > Mis.body.x*rez && mouseX < Mis.body.x*rez + 3*rez) && (mouseY > Mis.body.y*rez && mouseY < Mis.body.y*rez +3*rez)){
        print("Mischievous");
        tracer = 3;
        preview();
    }
}

function draw(){
    background(0);
    //grid layout for lining things up(doesnt work well with scale(rez)¯\_(ツ)_/¯)(test purposes)

    // for(let i=0;i<1400;i+=100){
    //     stroke(255);
    //     line(i,0,i,700);
    // }
    // for(let i=0;i<700;i+=100){
    //     stroke(255);
    //     line(0,i,1400,i);
    // }

    scale(rez);
    Rog.show();
    Wiz.show();
    Kni.show();
    Mis.show();
    textTitle.show();
    textRog.show();
    textWiz.show();
    textKni.show();
    textMis.show();
}