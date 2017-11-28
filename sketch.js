var value = 0;
var skyline;
var moon;


function preload(){
    skyline= loadImage('./assets/skyline.png');
    moon= loadImage('./assets/moon.png');
 
}

function setup() {
  createCanvas(375,667);
  angleMode(DEGREES);

  setShakeThreshold(30);
  frameRate(40);
}

function draw() {
  background(value);
    fill (255-value);

    tint(255-value);
    image(moon,frameCount,130,70,70);
    
    tint (255-value);
    image(skyline,0,480,400,190);
 }

WeakSet
function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}
