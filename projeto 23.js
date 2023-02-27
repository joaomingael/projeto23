const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, obj1, obj2, particle1, particle2, particle3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var particle1Options = {
    restitution: 1.0,
    frictionAir:0.01
  }

  var particle2Options = {
    restitution: 1.25,
    frictionAir:0.01
  }

  var particle3Options = {
    restitution: 1.0,
    frictionAir:0.01
  }
   
   var planeOptions ={
     isStatic: true
   };

   var obj1Options ={
    isStatic: true
   }
  
   var obj2Options ={
    isStatic: true
  };
  
  plane = Bodies.rectangle(100,400,600,20,planeOptions);
  World.add(world,plane);

  obj1 = Bodies.rectangle(100,200,100,20,obj1Options);
  World.add(world,obj1);

  obj2 = Bodies.rectangle(300,200,100,20,obj2Options);
  World.add(world,obj2);

  particle1 = Bodies.circle(100,10,20,particle1Options);
  World.add(world,particle1);
  
  particle2 = Bodies.circle(200,10,20,particle2Options);
  World.add(world,particle2);

  particle3 = Bodies.circle(300,10,20,particle3Options);
  World.add(world,particle3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("pink");
  Engine.update(engine);
  
  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  rect(plane.position.x, plane.position.y, 600,20);
  rect(obj2.position.x, obj2.position.y,100,20);
  rect(obj1.position.x, obj2.position.y,100,20);
}

