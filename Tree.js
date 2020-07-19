class Tree {
    constructor(num){
        this.PosX1=[-2998,-2325,400,1070,1955,2635];
        this.PosX2=[-2434,-1764,978,1875,2540,3000];
        this.r=num;
        this.body=createSprite(random(this.PosX1[this.r],this.PosX2[this.r]),random(-95,275),30,30);
        this.imgr=Math.round(random(1,9));
        this.img=loadImage("tree"+this.imgr+".png");
        this.body.addImage("tree",this.img);
        this.body.scale=0.5;
        if(this.imgr===1){
            this.body.scale=0.1;
        }
        this.body.depth=100000;
    }
}