const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
polygon_img = loadImage("polygon.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
ground1 = new Ground(400,500,800,20);
ground2 = new Ground(400,350,300,20);
block1 = new Block(300,325,30,50);
block2 = new Block(330,325,30,50);
block3 = new Block(360,325,30,50);
block4 = new Block(390,325,30,50);
block5 = new Block(410,325,30,50);
block6 = new Block(440,325,30,50);
block7 = new Block(470,325,30,50);
block8 = new Block(500,325,30,50);
block9 = new Block(330,275,30,50);
block10 = new Block(360,275,30,50);
block11 = new Block(390,275,30,50);
block12 = new Block(410,275,30,50);
block13 = new Block(440,275,30,50);
block14 = new Block(470,275,30,50);
block15 = new Block(360,225,30,50);
block16 = new Block(390,225,30,50);
block17 = new Block(410,225,30,50);
block18 = new Block(440,225,30,50);
block19 = new Block(400,175,30,50);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot = new Slingshot(this.polygon,{x:100,y:200})
}

function draw() {
    rectMode(CENTER);
    background(150);
    Engine.update(engine);
    textSize(20)
    fill("black")
    text("Drag the hexagonal stone and release it, to launch it towards the blocks.",100,30);
    
    ground1.display()
    ground2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}