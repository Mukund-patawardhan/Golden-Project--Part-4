class HCar{
    constructor(){
        this.posX=[-1220,-681,300,850,1383];
        this.r=Math.round(random(1,this.posX.length));
        this.x=random(-6000,-4500);
        this.y=this.posX[this.r-1];
        this.ran=Math.round(random(1,15));
        this.img=loadImage("car"+this.ran+".png");

        this.pollution=false;

        this.crash=loadSound("SCREAM.mp3");

        this.g=0;
    }

    Properties(){

        this.x+=0.1*(score+1);

        if(this.g===0){
        imageMode(CENTER);
        image(this.img,this.x,this.y,45,30);
        }

        if(this.x>1500*2.5){
            this.g=1
        }
        if(dist(this.x,this.y,game.player.x,game.player.y)<70){
            this.g=1;
            game.player.x=1500/2;
            game.player.y=500/2;
            this.x=-4500;
            this.crash.play();
            score-=2;
        }
        if(this.ran>26){
            this.pollution=true;
        }
    }
}