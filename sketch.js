const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1, box2, box3, box4;
var ball, rope;

function setup(){
    createCanvas(3000, 800);

    //Reglas del mundo
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 20);

    box1 = new Box(900, 200, 80, 80);
    box2 = new Box(900, 160, 80, 80);
    box3 = new Box(800, 200, 80, 80);
    box4 = new Box(800, 160, 80, 80);
    
    box5 = new Box(900, 120, 80, 80);
    box6 = new Box(900, 80, 80, 80);
    box7 = new Box(900, 40, 80, 80);
    
    box8 = new Box(800, 120, 80, 80);
    box9 = new Box(800, 80, 80, 80);
    box10 = new Box(800, 40, 80, 80);

    ball = new Ball(200, 200, 80, 80);
    rope = new Rope(ball.body, {x: 500, y: 50});
}

function draw() {
    background(180);
    //Actualiza para ver los cambios
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}