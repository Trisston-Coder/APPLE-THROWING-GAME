var ground;
var dustbinImg,bin1;
var paperImg,paperSprite;
var MarketImg;
var log1, log2, log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
	MarketImg = loadImage("Market.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	log1 = new Log(600, 640, 150, 20);
	

	log2 = new Log (550, 580, 20, 150);
	

	log3 = new Log(680, 580, 20, 150);


    rightedge = Bodies.rectangle(400, 0, 3,400);

	//bin1 = new Bin(600, 547, 190, 200);

	ground = new Ground(400, 650, 800, 10);
	ground.shapeColor = color("brown")
	
	paperSprite = new Paper(100,200,70, {restitution:500, isStatic:false, density:90, friction: 0.5,});
}



function draw() {
  rectMode(CENTER);
  background(MarketImg);
  
  image(dustbinImg,500,500,250,150);
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  paperSprite.display();
  //bin1.display();
  
console.log(mouseX)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position, {x:269, y: -620});
	}
}