let buttonX, buttonY;

let video;

let shutterBtn;


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;
  
  video = createCapture(VIDEO);
  video.size(width, height*0.7);
  video.hide();
  
  layoutDraw();
  // rectMode 함수를 사용하여 사각형 모드를 CENTER로 설정
  rectMode(CENTER);
  
  shutterBtn = createButton('');
  shutterBtn.position(buttonX-(height*0.1)/2, height*0.91-(height*0.1)/2);
  shutterBtn.size(height*0.1, height*0.1);
  
  shutterBtn.style('border-radius', '50%');
  //shutterBtn.style();
  
  shutterBtn.mousePressed(capture);
}

function draw() {
  image(video, 0, height*0.08);
}


function layoutDraw() {
  // 상단 레이아웃 박스
  fill(255);
  noStroke();
  rect(0, 0, width, height*0.08);
  
  fill(0);
  noStroke();
  rect(0, height*0.78, width, height*0.22);
}

function capture() {
  background(255);
}


