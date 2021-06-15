const Engine = Matter.Engine; 
const World= Matter.World ; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint //Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position). The stiffness of constraints can be modified to create springs or elastic.

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bg = "sprites/bg1.png"
var score = 0

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime() ;
}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(230,180,PI/2)
    
    bird = new Bird(200,50);
    slingshot = new Slingshot(bird.body,{x:200,y:50}) ;
}

function draw(){

    //if(backgroundImg)
    background(backgroundImg)

    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display(); 

    bird.display();
    platform.display();
    slingshot.display();

    noStroke() ;
    textSize(30) ;
    fill("white") ;
    Text("SCORE" + score,300,50)

}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY}) ;
}

function mouseRelease() {
    slingshot.fly() ;
}

function keyPressed() {
    if(keyCode == 32) {
        bird.trajectory = [] ;
        matter.body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body) ;
    }
}

async function getTime() {
    var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata") ;
    var resJSON = await response.json() ;
    console.log(resJSON) ;
    var dt = resJSON.datetime ;
    var hr = dt.slice(11,13) ;
    console.log(dt) ;
    console.log(hr) ;
    if(hr >= 06 && hr<= 19) {
        bg = "sprites/bg1.png" 
    }
    else{
        bg = "sprites/bg2.jpg" 
    }
    backgroundImg = loadImage(bg)
}



