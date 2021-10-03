var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsTop1, obsTop2
var obstacleBottom, obstacleTop
var obsBottom1, obsBottom2, obsBottom3
var PLAY = 1; var END = 0;
var gameState = PLAY;


function preload(){
bgImg = loadImage("assets/bg.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obsTop1 = createSprite()

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        spawnObstaclesTop();
        
}

function spawnObstaclesTop() {
  obstacleTop= createSprite(500,50,40,50)
  obstacleTop.velocityX = -4
  obstacleTop.y = Math.round(random(10,100));
  var rand = Math.round(random(1,2));
  switch(rand){
  case 1: obstacleTop.addImage(obsTop1);
        break;
  case 2: obstacleTop.addImage(obsTop2);
        break;
  default:break;
  }
  obstacleTop.lifetime=100;
}
function reset() {
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false
}