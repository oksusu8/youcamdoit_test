function setup() {
  createCanvas(windowWidth, windowHeight); //createCanvas(393, 657);
}



function draw() {
  background(0);
  
  fill(220);
  noStroke();
  rect(0, windowHeight*0.08, windowWidth, windowHeight*0.7)
  //rect(0,50,393,433); // x좌표, y좌표, width, height
  
  
  
  fill(250);
  noStroke();
  circle(windowWidth/2, windowHeight*0.86, windowWidth*0.28); // 중심x좌표, y좌표, 지름
  
  
  
  fill(255);
  stroke(0);
  strokeWeight(3);
  circle(windowWidth/2, windowHeight*0.86, windowWidth*0.25); // 중심x좌표, y좌표, 지름
  
  //circle(196.5, 570, 68);
  
  
}