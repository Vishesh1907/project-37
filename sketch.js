var boy, boy_running, boy_collided;
var ground, groundImage;
var invisibleGround;
var cloud, cloudImage, cloudGroup;
var zombie, zombieGroup,zombieImage
var score = 0;

function preload() {
  boy_running = loadImage("images/boy.jpg");
  boy_collided = loadImage("images/boy collided.jpg");
  cloudImage = loadImage("cloud.png");
  groundImage = loadImage("images/ground.jpg");
  zombieImage = loadImage("images/zombie.jpg");
 
}
function setup() {
  createCanvas(500,500);
 
  boy = createSprite(50, 180, 20, 60);
  boy.addImage("running", boy_running)
  boy.scale = 0.03;
  ground = createSprite(200, 180, 400, 20);
  ground.velocityX = -6
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
  cloudGroup = new Group();
  zombieGroup= new Group();
  score = 0;
  
}

function draw() {
  
  background("white");
  score = score + Math.round(getFrameRate() / 60)
  text("score:" + score, 500, 50)

  
  if (keyDown("space")) {
    boy.velocityY = -12
  }
  boy.velocityY = boy.velocityY + 0.5
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }

  boy.collide(invisibleGround);

  
  

  spawnCloud();
  spawnZombie();

  drawSprites();
}
function spawnCloud() {
  if (frameCount % 60 === 0) {


    var cloud = createSprite(600, 120, 40, 10);
    cloud.addImage(cloudImage)
    cloud.velocityX = -5;
    cloud.y = Math.round(random(80, 120));
    cloud.scale = 0.5;
    cloud.lifeTime = 200;
    cloud.depth = boy.depth;
    boy.depth = boy.depth + 1;
    cloudGroup.add(cloud);

  }
}

function spawnZombie() {
  if (frameCount % 60 === 0) {
    var zombie = createSprite(600, 165, 10, 40);
    zombie.addImage(zombieImage)
    zombie.velocityX = -5;
    zombie.scale = 0.05;
    zombie.lifeTime = 364;
   zombieGroup.add(zombie);


  }
}
