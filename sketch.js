const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine; 
var world; 
var ground
var block,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15
function preload() {

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,300,350,20);
    block = new Block(415,250,50,50);
    block2 = new Block(360,250,50,50);
    block3 = new Block(480,250,50,50);
    block4 = new Block(540,250,50,50);
    block5 = new Block(600,250,50,50);


    block6 = new Block(390,200,50,50);
    block7 = new Block(450,200,50,50);
    block8 = new Block(510,200,50,50);
    block9 = new Block(570,200,50,50);

    block10 = new Block(420,150,50,50);
    block11= new Block(480,150,50,50);
    block12 = new Block(540,150,50,50);

    block13 = new Block(450,100,50,50);
    block14 = new Block(510,100,50,50);

    block15 = new Block(480,50,50,50);
    
}

function draw(){
    Engine.update(engine);
    background("Red")
    ground.display();
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();



}
