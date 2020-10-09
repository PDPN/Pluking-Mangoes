
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, treeImg, stoneImg, mangoImg1, mangoImg2, mangoImg3, mangoImg4;

function preload()
{
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
  mangoImg1 = loadImage("mango.png");
  mangoImg2 = loadImage("mango.png");
  mangoImg3 = loadImage("mango.png");
  mangoImg4 = loadImage("mango.png");
  stoneImg = loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(boyImg, 100, 600, 140, 180);

  imageMode(CENTER);
  image(treeImg, 600, 450, 400, 500);

  imageMode(CENTER);
  image(mangoImg1, 700, 400, 60, 60);
 
  imageMode(CENTER);
  image(mangoImg2, 600, 350, 60, 60);

  imageMode(CENTER);
  image(mangoImg3, 500, 300, 60, 60);

  imageMode(CENTER);
  image(mangoImg4, 450, 400, 60, 60);

  imageMode(CENTER);
  image(stoneImg, 65, 580, 30, 30);
  
  drawSprites();
 
}



