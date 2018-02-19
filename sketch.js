const Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  Body = Matter.Body;

let engine;
let world;
let slices = [];
let boundaries = [];

let ship;


function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    ship = new Ship(200, 350, width * 0.6 , 20, 0);
    //boundaries.push(new Boundary(150, 100, width * 0.6, 20, 0.3));
    //boundaries.push(new Boundary(250, 300, width * 0.6, 20, -0.3));
}

function draw() {
    background(51);
    ship.rotate(0.01, 0.2, -0.2);
    Engine.update(engine);
    ship.show();
    for (slice of slices) {
        slice.show();
    }
    for (boundary of boundaries) {
        boundary.show();
    }  
    
}

function keyPressed(){
    console.log (ship.body.angularVelocity);
    console.log (ship.body.angle);
    
    console.log (ship.body.angularVelocity);
    console.log (ship.body.angle);
    
    
}

function mouseDragged() {
    slices.push(new Slice(mouseX, mouseY, random(50, 150), random(5, 10)));
  }