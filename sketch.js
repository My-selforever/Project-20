var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(400,400);
  wall = createSprite(350, 200, 50, 400);
  car = createSprite(50,200,50,50)
  speed = random(10,100);
  weight = random(310,1500);
  deformation = 0.5*weight*speed*speed/22500;
  car.velocityX = speed
}

function draw() {
  background(255,255,255); 
  if (deformation<100  &&  touch(car,wall))
  {
    car.shapeColor = "green";
    car.velocityX = 0
  }

  if(deformation>=100  &&  deformation<180  &&  touch(car,wall))
  {
    car.shapeColor = "yellow";
    car.velocityX = 0;
  }

  if(deformation>=180  &&  touch(car,wall))
  {
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  drawSprites();
}

function touch(m,d)
{
 if (m.x- d.x<=d.width/2+m.width/2 &&
  d.x-m.x<=d.width/2+m.width/2 &&  m.y- d.y<=d.height/2+m.height/2 &&
  d.y-m.y<=d.height/2+m.height/2)
 {
  return true;
 }
 else
 {
   return false;
 }
}