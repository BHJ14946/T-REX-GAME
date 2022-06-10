
var trex,trex_running;
var edges;
var invisibleground
var ground,groundimage;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
 groundimage=loadImage("ground2.png")
  
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(200,180,400,20);
  ground.addImage(groundimage)
  invisibleground=createSprite(200,190,400,10)

  invisibleground.visible=false

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50;
}

function draw(){
  background(150);
  ground.velocityX=-2
  if(ground.x<0){
    ground.x=ground.width/2
  }
  console.log(trex.y);
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY=-10
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(invisibleground);
  drawSprites()
}

