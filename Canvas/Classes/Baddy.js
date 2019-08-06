class Baddy {
    constructor() {
        this.body = createVector(0,0);
    }
    show() {
        image(enemy, this.body.x, this.body.y, 1, 1);
    }
    baddyLocation(){
        let x = (floor(random(w)));
        let y = (floor(random(h)));
        this.body = createVector(x, y);
        if (baddy.hitWall(wall)) {
            this.baddyLocation();
        }
    }
    hitWall(wall) {
        for (let i = 0; i < wall.body.length; i++) {
            if (this.body.x === wall.body[i].x && this.body.y === wall.body[i].y) {
                return true;
            }
        }
    }
}