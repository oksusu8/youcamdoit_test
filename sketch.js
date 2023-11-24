let video;

function setup() {
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.size(windowWidth, windowHeight*0.7);

    video.hide();
}

function draw() {
    background(0);
    // 카메라
    image(video, 0, windowHeight*0.08, windowWidth, windowHeight*0.7);
    
    // 촬영 버튼
    fill(250);
    noStroke();
    circle(windowWidth/2, windowHeight*0.87, windowWidth*0.13);
    
    fill(255);
    stroke(0);
    strokeWeight(3);
    circle(windowWidth/2, windowHeight*0.87, windowWidth*0.11);

}

function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}