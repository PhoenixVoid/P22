var helicopterSprite, helicopterImg;
var packageBody, packageSprite, package;
var ground;
const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){

	helicopterImg = loadImage("helicopter.png");
	packageSprite = loadImage("package.png");

}

function setup(){
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	packageBody = createSprite(width/2, 200, 10, 10);
	packageBody.addImage(packageSprite);
	packageBody.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 1;

	package = new Package(helicopterSprite.x, helicopterSprite.y, 10, 10);

	ground = createSprite(width/2, height-35, width, 10);
	ground.shapeColor = color(255);

	package = Bodies.circle(width/2, 200, 5, {restitution:3, isStatic:true})
	World.add(world, package);

	packageBody = Bodies.circle(width/2, 200, 5, {restitution : 3, isStatic : true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	package.x = packageBody.position.x;
	package.y = packageBody.position.y;

}

function draw(){
	rectMode(CENTER);
	background(0);

	//package.display();

	drawSprites();
}

function keyPressed(){
	if(keyDown(DOWN_ARROW)){
		
		//package.isStatic(false);
		Matter.Body.setStatic(packageBody, false)
		packageBody.setRestitution = 0.3;
		packageBody.friction = 1.2;
		Matter.Body.setDensity(packageBody, 1)

	}

}