class Rouge{
    constructor() {
        this.body = createVector(1,1.5);
        this.track = 0;
    }
    show(){
        if(tracer === 1) {
            // animation for when selected

            if (count === 0) {
                image(rouge[2], this.body.x, this.body.y, 3, 3);
            } else {
                image(rouge[3], this.body.x, this.body.y, 3, 3);
            }
        }else{
            // idle animation

            let rand = ceil(random(100));
            if (rand === 1) {
                this.track = 1;
            } else if (rand === 100) {
                this.track = 0
            }
            if (this.track === 0) {
                image(rouge[0], this.body.x, this.body.y, 3, 3);
            } else {
                image(rouge[1], this.body.x, this.body.y, 3, 3);
            }
        }
        //display bounding box of clickable area(test purposes)

        fill(255);
        ellipse(this.body.x,this.body.y,0.1);
        ellipse(this.body.x+3,this.body.y,0.1);
        ellipse(this.body.x,this.body.y+3 ,0.1);
        ellipse(this.body.x+3,this.body.y+3,0.1);
    }
}