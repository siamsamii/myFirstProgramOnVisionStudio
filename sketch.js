

var square;
var bbimg;

function preload(){
  bbimg=loadImage("basketball.png");
}

function setup() {
  createCanvas(400,400);
  edges = createEdgeSprites();
  square = createSprite(200,200,40,40);
  square.addImage("square",bbimg);
square.scale = 0.01;
  //square.shapeColor = "blue";
  square.velocityX = 3;
  square.velocityY = 5;
 

}

function draw() 
{
  background(30);
  square.bounceOff(edges);
drawSprites();

}




