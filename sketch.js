var bananaimg,obstacleimg,background,score,monkey,monkeyrun,stone,
bg,ground,score,bgimg;

function preload(){monkeyrun=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
                   
bananaimg=loadImage("banana.png")
                   
stoneimg=loadImage("stone.png")
                   
bgimg=loadImage("jungle.jpg")}


function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,200,200)
  bg.addImage(bgimg)
 monkey = createSprite(50,200,20,50);
monkey.addAnimation("monkeyrun",monkeyrun);
  monkey.scale=0.12
 ground=createSprite(300,380,800,20)
  ground.visible=false  
  bananaGroup=new Group()
    stoneGroup=new Group()
  monkey.setCollider("circle",80,50,200)
   
  bg.velocityX=-5
   score=0
}

function draw() {
  background(220);
   if(keyDown("space")&&monkey.collide(ground)) {
   monkey.velocityY=-12
   }
   monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground)  
if(bg.x<0){
 bg.x=width/2  }
  
 if(monkey.isTouching(bananaGroup)) {
   score=score+2
     bananaGroup.destroyEach()}
    switch(score){ 
   case 10: monkey.scale=0.12
     break;
       case 20:monkey.scale=0.14 
     break;
       case 30: monkey.scale=0.16
     break;
       case 40: monkey.scale=0.18 
     default:  break;   
    
 }
 if(monkey.isTouching(stoneGroup)) {
   monkey.scale=0.12}

  

 drawSprites()
   text("score "+ score, 350, 100);
  spawnObstacles() 
  spawnbananas()
}

function spawnbananas(){
  if (frameCount % 80 === 0) {
     banana = createSprite(400,320,40,10);
    banana.y = Math.round(random(220,280))
    banana.addImage(bananaimg);
    banana.scale = 0.1
    banana.velocityX =  -5
    banana.lifetime = 134;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
  }  
  
  
  
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    stone = createSprite(400,365,10,40);
    stone.velocityX = - 5
    stone.addImage(stoneimg);           
    stone.scale = 0.1;
    stone.lifetime = 190
    stoneGroup.add(stone);
    stoneGroup.depth=bg.depth+1
  }
}








