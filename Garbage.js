class Garbage{
    constructor(){
        this.x=random(-1500*2,1500*2);
        this.y=random(-768*2,768*2)
        this.ran=Math.round(random(1,14));
        this.g=loadImage("garbage"+this.ran+".png");
    }

    touch(){
        push();
        imageMode(CENTER);
        image(this.g,this.x,this.y,10,10);
        pop();
    }
}