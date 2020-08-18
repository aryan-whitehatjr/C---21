var fixedRect, movingRect, loyalPaddle;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  loyalPaddle = createSprite(200,200,100,50);
  loyalPaddle.shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  loyalPaddle.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,loyalPaddle);
  

 
  drawSprites();
}
