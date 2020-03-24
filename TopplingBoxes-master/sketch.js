const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var pig2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,50,50);
    box2 = new Box(280,300,50,50);
    box3 = new Box(100,300,50,50);
    ground = new Ground(200,height,400,20);
    pig1 = new pig(215,300);
    pig2 = new pig(150,260);
    log1 = new log(215,275,60,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
}