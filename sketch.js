var dart,dartImage,speed,weight;

var B,thickness;



function preload(){

dartImage = loadImage("dart.png");
BImage = loadImage("board.png")

                                

}

function setup() {
  createCanvas(600,600);

  speed=random(50,300);
  weight=random(30,52);

  thickness=random(22,83);
  

  dart = createSprite(50,300);
  dart.addImage(dartImage);
  dart.scale = 0.11
  
  wall = createSprite(1200,300,thickness,height/2);
  wall1 = createSprite(510,320,20,60)
  wall1.addImage(BImage);
  wall1.scale = 0.2
 
  
}

function draw() {
  background("black");
 
  if (keyDown(RIGHT_ARROW)) {
    
    dart.velocityX = speed;


  }

  if (shot(dart,wall)){

dart.velocityX = 0;


var damage = 0.5*weight*speed*speed*weight/(thickness*thickness*thickness);

if (damage>0.01) {

background("yellow")
  

}
if (damage<0.01) {
  
  background("lightgreen")

}

if (damge>0.02) {
  
background("lightred")

}



  }
  
  drawSprites();
  }

  function shot(dart,wall){

   dartRightEdge =  dart.x+dart.width;
   wallLeftEdge = wall.x
    
   if (dartRightEdge>=wallLeftEdge) {
     return true
   }

    return false
   
  }