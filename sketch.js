var fixedRect, movingRect;
var gamingObject1;
var gamingObject2;
var ground;

function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gamingObject1 = createSprite(600,300,50,50);
  gamingObject1.velocityY = 3;
  //gamingObject1.velocityX = 3;

  ground = createSprite(600,700,1200,5);


  /*gamingObject2 = createSprite(800,500,50,50);
  gamingObject2.velocityY = -3;
  gamingObject2.velocityX = -3;
*/
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}



function draw() {
  background(0,0,0);  

  //movingRect.x = mouseX;
 // movingRect.y = mouseY;

  if (isTouching(fixedRect , movingRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  collide(ground,gamingObject1);


  drawSprites();
}


