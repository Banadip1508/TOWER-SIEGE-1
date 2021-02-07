const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,hexagon;
var slingshot,ground;
var box;
var hexagon;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(500,590,1000,20)
    b1=new Box(330,235,30,40)
    b2=new Box(360,235,30,40)
    b3=new Box(390,235,30,40)
    b4=new Box(420,235,30,40)
    b5=new Box(450,235,30,40)
    b6=new Box(360,195,30,40)
    b7=new Box(390,195,30,40)
    b8=new Box(420,195,30,40)
    b9=new Box(390,155,30,40)
   
}
function draw(){
    background("yellow")
    Engine.update(engine)
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    
}