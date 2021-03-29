var hr,mn,sc;
var scAngle,mnAngle,hrAngle

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(200,200)
  rotate(-90) 
  hr = hour()
  mn = minute()
  sc = second() 
  drawSprites();
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(4)
  line(0,0,80,0)
  pop()
  push()
  rotate(mnAngle)
  stroke("blue")
  strokeWeight(4)
  line(0,0,60,0)
  pop()
  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(4)
  line(0,0,30,0)
  pop()
  stroke("red")
  strokeWeight(3)
  noFill()
  arc(0,0,300,300,0,scAngle)
  stroke("blue")
  arc(0,0,280,280,0,mnAngle)
  stroke("green")
  arc(0,0,260,260,0,hrAngle)
}