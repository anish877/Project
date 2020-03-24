var sun
var mercury
var venus
var earth
var mars
var jupiter
var saturn
var uranus
var neptune



function setup() {
  createCanvas(800,400);
  sun = createSprite(80, 200, 100, 100);
  mercury = createSprite(200,200,20,20);
  venus = createSprite(250,200,20,20);
  earth = createSprite(300,200,20,20);
  mars = createSprite(350,200,20,20);
  jupiter = createSprite(400,200,50,50);
  saturn = createSprite(470,200,50,50);
  uranus = createSprite(540,200,50,50);
  neptune = createSprite(610,200,50,50);

}

function draw() {
  background(0);
  textSize(32);
  fill(random(0,255),random(0,255),random(0,255))
  text('Solar System',200,50)
 
  rectMode(CENTER);
  if(frameCount = frameCount + 10)
  {
    sun.width = sun.width + 1;
  }
  collide(sun,mercury); 
  collide(sun,venus);
  collide(sun,earth);
  collide(sun,mars);
  collide(sun,jupiter);
  collide(sun,saturn);
  collide(sun,uranus);
  collide(sun,neptune);
  drawSprites();
}
function collide(sun,earth){
if(sun.x + sun.width/2 > earth.x - earth.width/2 )
{
  earth.remove();
}
}