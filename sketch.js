var box1, box2, box3, ball;
var Ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ball = loadImage("sprites/bg.png");
	box1 = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Dustbin(200, 630, 80, 10);
	box2 = new Dustbin(width/2 + 40, 624,10, 50);
	box3 = new Dustbin(width/2 - 40, 624, 10, 50);

	ball = Bodies.circle(85 , 200 , 70, {restitution:3, isStatic:true});
	ball = new Paper(85, 200, 70);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:width/2, y:626} )
	}
}



