const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, wall, wall2, wall3;

var pin1, pin2, pin3, pin4, pin5, pin6;
function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  pin1 =Bodies.rectangle(200,320,20,20, options);
  pin2 =Bodies.rectangle(180,320,20,20, options);
  pin3 =Bodies.rectangle(220,320,20,20, options);
  pin4 =Bodies.rectangle(160,340,20,20, options);
  pin5 =Bodies.rectangle(200,340,20,20, options);;
  pin6 =Bodies.rectangle(240,340,20,20, options);
  var options = {restitution:0.4,
  friction:0.02};
  var statis = {isStatic:true};
  World.add(world,pin1);
  World.add(world,pin2);
  World.add(world,pin3);
  World.add(world,pin4);
  World.add(world,pin5);
  World.add(world,pin6);
  
  ground = Bodies.rectangle(200,400,400,20, statis );
  wall = Bodies.rectangle(0,400,20,300, statis );
  wall2 = Bodies.rectangle(400,400,20,300, statis );
  wall3 = Bodies.rectangle(200,0,400,20, statis );
  World.add(world,ground);
  World.add(world,wall2);
  World.add(world,wall3);
  World.add(world,wall);
  

 
  rectMode(CENTER);
}

function draw() {
  background("yellow");
  Engine.update(engine);
  rect(pin1.position.x, pin1.position.y, 20,20);
  rect(pin2.position.x, pin2.position.y, 20,20);
  rect(pin3.position.x, pin3.position.y, 20,20);
  rect(pin4.position.x, pin4.position.y, 20,20);
  rect(pin5.position.x, pin5.position.y, 20,20);
  rect(pin6.position.x, pin6.position.y, 20,20);
  rect(ground.position.x, ground.position.y, 400,20);
  rect(wall.position.x, wall.position.y, 20,1000);
  rect(wall2.position.x, wall2.position.y, 20,1000);
  rect(wall3.position.x, wall3.position.y, 400,20);

 
}










