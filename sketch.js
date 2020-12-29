
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  //monkey sprite
  monkey =createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-5
  ground.x=ground.width/2
  
  FoodGroup=new Group;
  obstaclesGroup= new Group
  
    
stroke("black")
textSize(20)
fill("black")  
  
  

  
}


function draw() {
  background("550");
  if(ground.x>0){
    ground.x=ground.width/2}
    
  if(keyDown("space")&& monkey.y > 150){
    monkey.velocityY=-12} 
    monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
 
  survivalTime=Math.ceil(frameCount/60)
 text("SurvivalTime:"+survivalTime,400,50)
 banana();
  Obstacles();
  
 
 console.log(monkey.y)
 
 
  
drawSprites();
  
}
function banana() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage( bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }

}



  function Obstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,325,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6
    obstacle.addImage(obstaceImage)
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}









