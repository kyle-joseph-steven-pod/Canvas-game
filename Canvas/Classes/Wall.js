class Wall {
    constructor(ammount) {
        this.body = [];
        for(let count=0;count<ammount;count++) {
            this.x = floor(random(w-1));
            this.y = floor(random(h-1));
            this.h = ceil(random(3));
            this.w = ceil(random(3));
            for (let i = 0; i < this.h; i++) {
                for (let j = 0; j < this.w; j++) {
                    this.body.push(createVector(this.x + i, this.y + j));
                }
            }
        }
        print(this.body);
    }
    show() {
        for(let i=0; i<this.body.length;i++){
            image(wallIn,this.body[i].x, this.body[i].y, 1, 1)
        }
    }
}