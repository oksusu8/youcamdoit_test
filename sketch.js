let video;

function setup() {
  createCanvas(windowWidth, windowHeight); //createCanvas(393, 657);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight*0.7); //video.size(width, height);
}



function draw() {
  background(0);
  image(video, 0, windowHeight*0.08, windowWidth, windowHeight*0.7);
  
  fill(250);
  noStroke();
  circle(windowWidth/2, windowHeight*0.87, windowWidth*0.13); // 중심x좌표, y좌표, 지름
  
  
  
  fill(255);
  stroke(0);
  strokeWeight(3);
  circle(windowWidth/2, windowHeight*0.87, windowWidth*0.11); // 중심x좌표, y좌표, 지름
  
  //circle(196.5, 570, 68);
  
  
}