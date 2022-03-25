var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(521,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(0,200);
  sea.addImage(seaImg);
  sea.scale=0.25;

  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = 5;

  
  //código para redefinir o plano de fundo
  if(sea.x > 521){
    sea.x = 0//sea.width/8 *-1;
  }

  console.log (sea.x)
    
  drawSprites();
}
