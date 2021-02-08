
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
	paperImage = loadImage("paper.png");
}

function setup() {
	
	createCanvas(1200,600); 


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,550,1200,20);

	paper = new Line (1100,470,20,150);
	paper2 = new Line (950,470,20,150);
	
	crumble = new Paper(100,200,20);

	fill("white");
	Engine.run(engine);

}


function draw() {
  Engine.update(engine);

  dust = createSprite(1025,430,21,21);
  dust.addImage(dustbinImage);
  dust.scale = 0.68;

  rectMode(CENTER);
  background(0);
  paper.display();
  paper2.display();   
  ground.display();
  crumble.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumble.body, crumble.body.position,{x:70,y:-75});
	}
}


