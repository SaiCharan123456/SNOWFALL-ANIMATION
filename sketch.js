var snow1;
function preload(){
  bg=loadImage("snow2.jpg");
  snow=loadImage("snow5.webp");
  snow3=loadImage("snow4.webp")
  snowm1=loadImage("snowmam .png");
  snowSon=loadSound("WhatsApp Ptt 2021-05-06 at 12.20.50 AM.ogg")
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 120);
  /*snow1=createSprite(random(displayWidth), 10, 50, 50);
  snow1.addImage(snow);
  snow1.scale = 0.1;*/
  snowman = createSprite(200,displayHeight-150,50,50);
  snowman.addImage(snowm1);
  snowman.scale = 0.4;
  ground= createSprite(displayWidth/2,displayHeight-110,displayWidth,20)
}

function draw() {
  background(bg);  
  snow1=createSprite(random(displayWidth), -10, 50, 50);
  snow1.addImage(snow);
  snow1.scale = 0.1;
  snow1.velocityY=5;
  snowSon.play();
  /*snow2=createSprite(random(displayWidth), -10, 50, 50);
  snow2.addImage(snow3);
  snow2.scale = 0.2;
  snow2.velocityY=5;*/
  if(keyDown(UP_ARROW) && snowman.y >= displayHeight - 300){
    snowman.velocityY= -15
  }
  snowman.velocityY = snowman.velocityY + 0.8
  if(keyDown(LEFT_ARROW)){
    snowman.x =  snowman.x - 5 
  }

  if(keyDown(RIGHT_ARROW)){
    snowman.x =  snowman.x + 5  
  }
  snowman.collide(ground);
  drawSprites();
}