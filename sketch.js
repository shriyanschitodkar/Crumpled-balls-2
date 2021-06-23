
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin1,Dustbin2,Dustbin3
var ball 
function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin1=new Dustbin(1000,570,220,30);
	Dustbin2=new Dustbin(890,510,20,130);
	Dustbin3=new Dustbin(1100,510,20,130);
	ground=new Ground(700,580,1300,20);
	ball=new Paper(100,500,20);

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
	Dustbin1.display();
	Dustbin2.display();
	Dustbin3.display();
	ball.display();
	
	ground.display();

  
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-85})	
	}
}



