var curTime;
var newTime;
function setup() {
  createCanvas(800, 600); // make an HTML canvas element width x height pixels
  angleMode(DEGREES);
  curTime = minute();
  ellipseMode(RADIUS);



}


function draw() {
  background(225);
  newTime = minute();
  if(curTime != newTime){
    print(minute());
    curTime = minute();
  }  
  
  fill(0, 70, 40);
  push();
  fill(255, 153, 255);
  noStroke();
  rect(0, 30, 400, 130);
  pop();
  push();
  fill(51, 204, 255);
  noStroke();
  rect(400, 30, 400, 130);
  pop();
  let x1 = map(hour(), 0, 23, 1, width-10);
  push();
  translate(x1, 0);
  fill(0,0,0);
  rect(0, 50, 10, 90);
  pop();


  // from 200 to 600
  amorpm = second()
  let move = map(amorpm, 0, 60, 202, 598);
  let ind = map(amorpm, 0,60,0,1);
  c1 = color(83, 255, 20);
  c2 = color(244, 20, 83);
  let c = lerpColor(c1, c2, ind);
  fill(c);
  push();
  noStroke();
  circle(move, 400, 200);
  noStroke();
  pop();

  push();
  let x3 = map(hour(), 0, 12, 0, 360);
  translate(move, 400);
  rotate(x3);
  fill(0, 100, 100);
  line(0, 0, 0, -90);
  pop();


  // hours 


  // minutes
  let angle = map(minute(), 0, 60, 0, 360) - 90;
  var a = 150; // Set up the amplitute (radius of the circle)
  var x = a * cos(angle);
  var y = a * sin(angle);

  push();
  noStroke();
  blendMode(OVERLAY);
  fill(255, 255, 255);
  circle(move + x, 400 + y, 50);
  pop();
  let newangle = map(second(), 0, 60, 0, 360) - 90;
  var xx = 50 * cos(newangle);
  var yy = 50 * sin(newangle);
  line(move + x, 400 + y, move + x + xx, 400 + y + yy);
  strokeWeight(5);
  fill(0, 200, 200);

  textSize(16);
  fill(180);
  text(hour(), 393, 60);
  fill(100);
  text(minute(), 393, 90);
  fill(0);
  text(second(), 393, 120);




}