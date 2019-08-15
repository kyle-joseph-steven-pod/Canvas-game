let rez = 50;
let h;
let w;
let hero;
let wall;
let baddy = [];
let baddyAmount = 4;
// img var
let Player;
let wallIn;
let enemy;

function preload() {
    Player = loadImage('img/Mis-standing-Normalized.png ');
    wallIn = loadImage("img/bg-1.jpg");
    enemy = loadImage("img/Mis-skull-Normalized.png")
}
function setup() {
    createCanvas(1400, 700);
    frameRate(20);
    w = width / rez;
    h = height / rez;
    hero = new Hero();
    wall = new Wall(20);
    for(let i=0;i<baddyAmount;i++){
        baddy[i] = new Baddy();
        }
    for(let i=0;i<baddyAmount;i++) {
        baddy[i].baddyLocation();
    }
}

function keyPressed() {
    switch (keyCode) {
        case 87:
            hero.setDir(0, -1);
            hero.update();
            if (hero.moveOut() || hero.hitWall(wall)) {
                hero.setDir(0, 1);
            }
            break;
        case 65:
            hero.setDir(-1, 0);
            hero.update();
            if (hero.moveOut() || hero.hitWall(wall)) {
                hero.setDir(1, 0);
            }
            break;
        case 83:
            hero.setDir(0, 1);
            hero.update();
            if (hero.moveOut() || hero.hitWall(wall)) {
                hero.setDir(0, -1);
            }
            break;
        case 68:
            hero.setDir(1, 0);
            hero.update();
            if (hero.moveOut() || hero.hitWall(wall)) {
                hero.setDir(-1, 0);
            }
            break;
    }
}
function draw() {
    scale(rez);
    background(255);
    for(let i=0;i<baddyAmount;i++){
        hero.fight(baddy[i]);
    }
    wall.show();
    for(let i=0;i<baddyAmount;i++) {
        baddy[i].show();
        baddy[i].update();
    }
    hero.update();
    hero.show();
}