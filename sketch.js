const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,100)
    box2 = new Box(220,50,50,50)

    ground = new Ground(200,375,395,25)
}

function draw(){
    background(0);
    Engine.update(engine);

   box1.display();
   box2.display();
   ground.display();
}