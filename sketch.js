var backGround, astronaut;

function preload() {
  bath = loadAnimation("bath1.png", "bath2.png")
  brush = loadAnimation("brush.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  gym = loadAnimation("gym1.png", "gym2.png")
  bG = loadImage("iss.png")
  move = loadAnimation("move.png", "move1.png", "move.png")
  sleep = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(1000,600);
  backGround = createSprite(width/2, height/2, 400, 200);
  backGround.addImage(bG)
  backGround.scale = 0.2

  astronaut = createSprite(width/2, 450)
  astronaut.addAnimation("sleep", sleep)
  astronaut.scale = 0.1;
}

function draw() {
  background(0); 
  if(keyDown(UP_ARROW)) {
    astronaut.addAnimation("brush", brush)
    astronaut.x = width/2
    astronaut.y = 450
    astronaut.changeAnimation("brush")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  else if(keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("gym", gym)
    astronaut.x = width/2
    astronaut.y = 450
    astronaut.changeAnimation("gym")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  else if(keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("bath", bath)
    astronaut.x = width/2
    astronaut.y = 450
    astronaut.changeAnimation("bath")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  else if(keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("eat", eat)
    astronaut.x = width/2
    astronaut.y = 450
    astronaut.changeAnimation("eat")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  else if(keyDown("m")) {
    astronaut.addAnimation("move", move)
    astronaut.x = width/2
    astronaut.y = 450
    astronaut.changeAnimation("move")
    astronaut.velocityX = 2
    astronaut.velocityY = 2
  }
  var edges = createEdgeSprites();
  astronaut.bounceOff(edges)
  
  drawSprites();
  fill(255)
  textSize(20)
  text("INSTRUCTIONS:", 10, 40)
  textSize(15)
  text("Up Arrow = Brushing", 10, 60)
  text("Down Arrow = Exercise", 10, 80)
  text("Right Arrow = Bathing", 10, 100)
  text("Left Arrow = Eating", 10, 120)
}