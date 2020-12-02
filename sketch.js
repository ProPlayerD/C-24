var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var package_options;
var box1body,box2body,box3body,box1Sprite,box2Sprite,box3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package_options={

      isStatic : false

	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-30, width,20,{friction:0});
	groundSprite.shapeColor=color(255)

	//fill("red");
	rectMode(CENTER);
	box1Sprite = createSprite(400,670,200,20);
	box1Sprite.shapeColor=color(255, 0, 0);

	box2Sprite = createSprite(300,610,20,140);
	box2Sprite.shapeColor=color(255, 0, 0);

	box3Sprite = createSprite(500,610,20,140);
	box3Sprite.shapeColor=color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:0, isStatic:true});
	World.add(world, packageBody);

	rectMode(CENTER);
	box1body = Bodies.rectangle(400,650,200,20,{friction:-1});
	World.add(world,box1body);

	rectMode(CENTER);
	box2body = Bodies.rectangle(300,610,20,100);
	World.add(world,box1body);
	 
	rectMode(CENTER);
	box3body = Bodies.rectangle(500,610,20,100);
	World.add(world, box3body)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //box1Sprite.x = box1body.postition.x
  //box1Sprite.y = box1body.postition.y


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:false});
	World.add(world, packageBody);
	
	Engine.run(engine);
  }
}
