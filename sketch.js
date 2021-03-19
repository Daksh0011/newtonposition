
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    base = new roof(420,200,400,50)

    bob1=new Bob(300,500,30);
	bob2=new Bob(360,500,30);
	bob3=new Bob(420,500,30);
	bob4=new Bob(480,500,30);
	bob5=new Bob(540,500,30);

	rope1 = new rope(bob1.body,roof.body,-50*2,18)
	rope2 = new rope(bob2.body,roof.body,-25*2,18)
	rope3 = new rope(bob3.body,roof.body,0*2,18)
    rope4 = new rope(bob4.body,roof.body,25*2,18)
    rope5 = new rope(bob5.body,roof.body,50*2,18)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
base.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



