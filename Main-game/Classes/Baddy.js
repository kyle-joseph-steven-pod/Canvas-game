class Baddy {
    constructor() {
        this.body = createVector(0,0);
    }
    show() {
        image(enemy, this.body.x, this.body.y, 1, 1);
    }
    baddyLocation(){
        let x = (floor(random(w-1)));
        let y = (floor(random(h-1)));
        this.body = createVector(x, y);
        if (this.hitWall(wall)) {
            this.baddyLocation();
        }
        background(255,0,0)
    }
    update(){
        let Hx = hero.body.x;
        let Hy = hero.body.y;
        let Bx = this.body.x;
        let By = this.body.y;
        let chance = floor(random(100));
        if(chance < 5) {
            if (dist(Bx, By, Hx, Hy) < 10) {
                let rand = floor(random(2));
                if (Bx <= Hx && By <= Hy) {
                    if (rand === 0 && Bx !== Hx) {
                        this.body = createVector(Bx + 1, By);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx - 1, By);
                        }
                    } else if (By !== Hy) {
                        this.body = createVector(Bx, By + 1);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx, By - 1);
                        }
                    }
                } else if (Bx > Hx && By < Hy) {
                    if (rand === 0) {
                        this.body = createVector(Bx - 1, By);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx + 1, By);
                        }
                    } else {
                        this.body = createVector(Bx, By + 1);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx, By - 1);
                        }
                    }
                } else if (Bx < Hx && By > Hy) {
                    if (rand === 0) {
                        this.body = createVector(Bx + 1, By);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx - 1, By);
                        }
                    } else {
                        this.body = createVector(Bx, By - 1);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx, By + 1);
                        }
                    }
                } else {
                    if (rand === 0 && Bx !== Hx) {
                        this.body = createVector(Bx - 1, By);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx + 1, By);
                        }
                    } else if (By !== Hy) {
                        this.body = createVector(Bx, By - 1);
                        if(this.moveOut() || this.hitWall(wall)){
                            this.body = createVector(Bx, By + 1);
                        }
                    }
                }
            } else {
                let dir = ceil(random(4));
                switch (dir) {
                    case 1:
                        this.body = createVector(Bx, By - 1);
                        if (this.moveOut() || this.hitWall(wall)) {
                            this.body = createVector(Bx, By + 1);
                        }
                        break;
                    case 2:
                        this.body = createVector(Bx, By + 1);
                        if (this.moveOut() || this.hitWall(wall)) {
                            this.body = createVector(Bx, By - 1);
                        }
                        break;
                    case 3:
                        this.body = createVector(Bx - 1, By);
                        if (this.moveOut() || this.hitWall(wall)) {
                            this.body = createVector(Bx + 1, By);
                        }
                        break;
                    case 4:
                        this.body = createVector(Bx + 1, By);
                        if (this.moveOut() || this.hitWall(wall)) {
                            this.body = createVector(Bx - 1, By);
                        }
                        break;
                }
            }
            this.show();
        }
    }
    moveOut() {
        if (this.body.x > w - 1 || this.body.x < 0 || this.body.y > h - 1 || this.body.y < 0) {
            return true;
        } else {
            return false;
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