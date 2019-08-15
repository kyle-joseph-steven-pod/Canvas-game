class Hero {
    constructor() {
        this.body = createVector(0, 0);
        this.dirx = 0;
        this.diry = 0;
        this.r = 6;
    }
    setDir(X, Y) {
        this.dirx += X;
        this.diry += Y;
    }
    //conditional to tell if the player is going to hit a wall tile
    moveOut() {
        if (this.body.x > w - 1 || this.body.x < 0 || this.body.y > h - 1 || this.body.y < 0) {
            return true;
        } else {
            return false;
        }
    }
    //updates the postion on the canvas based on x + y coords
    show() {
        image(Player, this.body.x, this.body.y, 1, 1);
        // makeShadow(this.body.x, this.body.y);
    }
    //updates the player x + y coords;
    update() {
        this.body.x = this.dirx;
        this.body.y = this.diry;
    }
    //conditional to tell if player is interacting with food tile
    fight(baddy) {
        if (this.body.x === baddy.body.x && this.body.y === baddy.body.y) {
            baddy.baddyLocation();
        }
    }
    //conditional to tell if the player is hitting any of the wall tiles
    hitWall(wall) {
        for (let i = 0; i < wall.body.length; i++) {
            if (this.body.x === wall.body[i].x && this.body.y === wall.body[i].y) {
                return true;
            }
        }
    }
}