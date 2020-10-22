
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,groundBody
var paper,paperBody
var dustbin,dustbinBody


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	groundBody=Bodies.rectangle(400,690,800,20,{isStatic:true})
    World.add(world,groundBody)
    ground=createSprite(groundBody.position.x,groundBody.position.y,800,20)
	ground.shapeColor="green"
	
	wall1=createSprite(650,670,100,20)
    wall1.shapeColor="white"
    wall1Body=Bodies.rectangle(wall1.x,wall1.y,100,20,{isStatic:true})
    World.add(world,wall1Body)

    wall2=createSprite(600,630,20,100)
	wall2.shapeColor="white"
	wall2Body=Bodies.rectangle(wall2.x,wall2.y,20,100,{isStatic:true})
	World.add(world,wall2Body)
	
	wall3=createSprite(700,630,20,100)
    wall3.shapeColor="white"   
	wall3Body=Bodies.rectangle(wall3.x,wall3.y,20,100,{isStatic:true})
	World.add(world,wall3Body)
	
	var options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0.5,
	 density:1.2
	}
	paperBody=Bodies.circle(100,650,20,options)
    World.add(world,paperBody)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  push()
  fill("pink")
  ellipse(paperBody.position.x,paperBody.position.y,20,20)
  pop()
  drawSprites();
  if(keyDown("up")){
	  Matter.Body.applyForce(paperBody,paperBody.position,{x:10,y:-10});
  }
}



