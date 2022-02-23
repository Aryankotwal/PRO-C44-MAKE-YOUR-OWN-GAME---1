var bg;
var rocket1;
var rocket2;
var rocket3;
var ufo1;
var ufo2;
var ufo3;
var ufo4;

function preload(){
spaceImage = loadImage("space.jpg");
rocket1Image = loadImage("rocket1.png");
rocket2Image = loadImage("rocket2.png");
rocket3Image = loadImage("rocket3.png");
ufo1Image = loadImage("ufo1.png");
ufo2Image = loadImage("ufo2.png");
ufo3Image = loadImage("ufo3.png");
ufo4Image = loadImage("ufo4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite( 700 , 450, 1400, 700 );
  bg.addImage(spaceImage);
  bg.scale= 2
 bg.x = bg.width/2 ;
 bg.velocityX = -3 ;

rocket1 = createSprite(100,200,50,50);
rocket1.addImage(rocket1Image);
rocket1.scale = 0.5

rocket2 = createSprite(100,400,50,50);
rocket2.addImage(rocket2Image);
rocket2.scale = 0.5

rocket3 = createSprite(100,600,50,50);
rocket3.addImage(rocket3Image);
rocket3.scale = 0.5

ufo1 = createSprite(1400,550,50,50);
ufo1.addImage(ufo1Image);

ufo2 = createSprite(1400,330,50,50);
ufo2.addImage(ufo2Image);

ufo3 = createSprite(1400,100,50,50)
ufo3.addImage(ufo3Image);

ufo4 = createSprite(1100,340,50,50)
ufo4.addImage(ufo4Image);
ufo4.scale = 0.4

}

function draw() {
  background("red");
  if(bg. x < 700){
    bg.x = bg.width;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




  drawSprites();
}

