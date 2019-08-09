let rez = 100;
let h;
let w;
let hero;
let wall;
let baddy;
// img var
let Player;
let wallIn;
let enemy;
function preload() {
    Player = loadImage('Picture/Mis-standing-Normalized.png ');
    wallIn = loadImage("Picture/bg-1.jpg");
    enemy = loadImage("Picture/Mis-skull-Normalized.png")
}
function setup() {
    createCanvas(1450, 500);
    w = width / rez;
    h = height / rez;
    hero = new Hero();
    wall = new Wall(4);
    baddy = new Baddy();
    baddy.baddyLocation();
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
    hero.fight(baddy);
    wall.show();
    baddy.show();
    baddy.update();
    hero.update();
    hero.show();
}