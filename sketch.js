var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacleImage;
var foodsGroup, obstacleGroup;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400)  
  
  monkey = createSprite(60,330,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale= 0.1;
  
  ground = createSprite(200,360,400,15);
  ground.x = ground.width /2;
  ground.shapeColor = "gray";
  
  obstacleGroup = createGroup();
  foodsGroup = createGroup();
  
  survivaltime = 0;
  
}


function draw() {
  
  background ("lightblue");
  
  monkey.collide(ground );
  
  if (keyDown("space")&& monkey.isTouching(ground)){
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnObstacles();
  food();
  
  drawSprites();
  
  stroke("black");
  fill("white");
  textSize(25);
  survivaltime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivaltime,100,70); 
  
}

function spawnObstacles(){
  
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,328,10,40);
   obstacle.addImage("obstacle12",obstacleImage);
   obstacle.velocityX = -6;
   obstacle.lifetime = 300;
   obstacle.scale=0.13;
   obstacleGroup.add(obstacle);
  }
}

function food(){
   if (frameCount % 80 === 0) {
     var banana = createSprite(400,10,10,10);
     banana.addImage("banana1",bananaImage);
     banana.scale=0.1;
     banana.velocityX=-6;
     banana.y = Math.round(random(120,200));
     banana.lifetime = 300;
     foodsGroup.add(banana);
}
}