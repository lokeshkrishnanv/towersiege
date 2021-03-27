const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, ground;
var base1,base2;
var polygon, polygonIMG, backgroundImg
var slingshot
var bg = "light.jpg"

function preload(){
  getBackgroundImage();
  polygonIMG = loadImage("polygon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world
  Engine.run(engine);
  
  ground = new Ground(windowWidth-20, windowHeight+10, windowWidth, windowHeight)
  base1 = new Ground(600,500,300, 10)
  base2 = new Ground(1050,350,250,10)

  box1 = new Box(530,470,40,50);
  box2 = new Box(570,470,40,50);
  box3 = new Box(610,470,40,50);
  box4 = new Box(650,470,40,50);
  box5 = new Box(690,470,40,50);
  box6 = new Box(552,420,40,50);
  box7 = new Box(592,420,40,50);
  box8 = new Box(632,420,40,50);
  box9 = new Box(672,420,40,50);
  box10 = new Box(573,370,40,50);
  box11 = new Box(613,370,40,50);
  box12 = new Box(653,370,40,50);
  box13 = new Box(595,320,40,50);
  box14 = new Box(635,320,40,50);
  box15 = new Box(616,270,40,50);
  
  box16 = new Box(1000,320,40,50);
  box17 = new Box(1040,320,40,50);
  box18 = new Box(1080,320,40,50);
  box19 = new Box(1120,320,40,50);
  box20 = new Box(1020,270,40,50);
  box21 = new Box(1060,270,40,50);
  box22 = new Box(1100,270,40,50);
  box23 = new Box(1040,220,40,50);
  box24 = new Box(1080,220,40,50);
  box25 = new Box(1060,170,40,50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingshot = new SlingShot(this.polygon,{x:100,y:450});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  fill("darkblue");
  base1.display();
  base2.display();

  fill("cyan");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill("lightgreen");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("yellow")
  box10.display();
  box11.display();
  box12.display();

  fill("orange");
  box13.display();
  box14.display();

  fill("red");
  box15.display();
  
  fill("green");
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  fill("yellow");
  box20.display();
  box21.display();
  box22.display();

  fill("orange");
  box23.display();
  box24.display();

  fill("red");
  box25.display();

  imageMode(CENTER)
  image(polygonIMG ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

  if (hour >= 06 && hour <= 18) {
    bg = "light.jpg";
  } else {
    bg = "dark.jpg";
  }
    backgroundImg = loadImage(bg);
}