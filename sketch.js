var canvas;
var form,game;
var gameState=0;
var up,down,right,left,stand;
var roads;
var score=0;
var s=0;
var a=1;
var scream;

function preload(){
  up=loadAnimation("walkingUp1.png","walkingUp2.png");
  down=loadAnimation("walkingDown1.png","walkingDown2.png");
  left=loadAnimation("walkingLeft1.png","walkingLeft2.png");
  right=loadAnimation("walkingRight1.png","walkingRight2.png");
  stand=loadAnimation("standing.png");

  roads=loadImage("roads2.png");

  applause1=loadSound("Applause1.mp3");
  applause2=loadSound("Applause2.mp3");

}

function setup() {
  canvas=createCanvas(1300,600);

  frameRate(5);

  game=new Game ();
}

function draw() {
  background("#22B14C");  

  //console.log(getFrameRate())

  if(gameState===0){
    game.Form();
    if(s===0){
    form.input.mousePressed(consol);
    }
  }
  if(gameState===1){
    game.game();
  }

  frameRate(5);
  //console.log(getFrameRate())

}

function consol(){
  if(s===0){
  form.input.value("");
  s=1;
  }
}

function keyReleased(){
  game.player.setVelocity(0,0);
  game.player.changeAnimation("stand",stand);
}

function keyPressed(){
  if(1){
    if(keyCode===RIGHT_ARROW){
      game.player.setVelocity(15,0);
      game.player.addAnimation("right",right);
      game.player.changeAnimation("right",right);
      }
    }
    if(1){
    if(keyCode===LEFT_ARROW){
      game.player.setVelocity(-15,0);
      game.player.addAnimation("left",left);
      game.player.changeAnimation("left",left);
    }
    }
    if(1){
    if(keyCode===UP_ARROW){
      game.player.setVelocity(0,-15);
      game.player.addAnimation("up",up);
      game.player.changeAnimation("up",up);
    }
    if(1){
    if(keyCode===DOWN_ARROW){
      game.player.setVelocity(0,15);
      game.player.addAnimation("down",down);
      game.player.changeAnimation("down",down);
    }
    }
}
}
