class Text{
    constructor(x,y,text,size){
        this.size = size;
        this.x = x;
        this.y = y;
        this.text = text;
    }
    show(){
        textSize(this.size);
        stroke(0,0,0,0);
        fill(255);
        text(this.text,this.x,this.y);
    }
}