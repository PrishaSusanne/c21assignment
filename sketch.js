var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptun;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, 
uranusImg, neptunImg;

function preload(){
   sunImg = loadImage("img/sun.jpg");
   mercuryImg = loadImage("img/mercury.jpg");
   venusImg = loadImage("img/venus.jpg");
   earthImg = loadImage("img/earth.jpg");
   marsImg = loadImage("img/mars.jpg");
   jupiterImg = loadImage("img/jupiter.jpg");
   saturnImg = loadImage("img/saturn.jpg");
   uranusImg = loadImage("img/uranus.jpg");
   neptunImg = loadImage("img/neptune.jpg");
}

function setup() {
  createCanvas(1200,1200);
   mercury = createSprite(220,220,50,50);
   mercury.addImage("mercury",mercuryImg);
   mercury.scale=0.45;
   mercury.debug=true;
   sun = createSprite(50, 50, 50, 50);
   sun.addImage("sun",sunImg);
   sun.scale=0.5;
   sun.debug=true;
   venus = createSprite(400,270,50,50)
   venus.addImage("venus",venusImg); 
   venus.scale=0.5;
   venus.debug=true;
   mars = createSprite(420,400,50,50);
   mars.addImage("mars",marsImg);
   mars.scale=0.5;
   mars.debug=true;
   saturn = createSprite(650,400,50,50);
   saturn.addImage("saturn",saturnImg);
   saturn.scale=0.5;
   saturn.debug=true;
   uranus = createSprite(770,250,50,50);
   uranus.addImage("uranus",uranusImg);
   uranus.scale=0.5;
   uranus.debug=true;
   jupiter = createSprite(600,200,50,50); 
   jupiter.addImage("jupiter",jupiterImg);
   jupiter.scale=0.4;
   jupiter.debug=true;
   neptun = createSprite(900,200,50,50);
   neptun.addImage("neptun",neptunImg);
   neptun.scale=0.5;
   neptun.debug=true;
}

function draw() {
  background(0);
  
  angleMode(DEGREES)//radius
  //translate(width/3,height/3);
  //rotate(angle);

     if(sun.collide(mercury)){
        mercury.destroy();
     }

      if(sun.collide(venus)){
        venus.destroy();
      }

      if(sun.collide(mars)){
         mars.destroy();
      }

      if(sun.collide(jupiter)){
        jupiter.destroy();
      }

    if(sun.collide(saturn)){
      saturn.destroy();   
    }

   if(sun.collide(uranus)){
     uranus.destroy();
   }

      if(sun.collide(neptun)){
        neptun.destroy();
      }

  //   angle = angle + angleSpeed

   if(frameCount % 1 ===0 ){
      sun.scale= sun.scale + 0.001;
  }

  drawSprites();
}