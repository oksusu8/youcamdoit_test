let buttonX, buttonY;

let video;

let menu, flip;
let shutterBtn;
let autoBtn;
let poseBtn;

let isVisible = true; // 밑 탭들이 보이게 안보이게 선택하는 조건

function preload() {
  menu = loadImage("menu.png");
  flip = loadImage("flip.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;
  
  video = createCapture(VIDEO);
  video.size(width, height*0.65); // *0.7
  video.hide();
  //withdraw();
  layoutDraw();
  // rectMode 함수를 사용하여 사각형 모드를 CENTER로 설정
  rectMode(CENTER);
  
  //withdraw();
  
  shutterBtn = createButton('');
  shutterBtn.class('shutterBtn');
  shutterBtn.position(buttonX-(height*0.12)/2, height*0.88-(height*0.12)/2);
  shutterBtn.size(height*0.12, height*0.12); // 0.09 & 0.91
  captureBtn();
  
  autoBtn = createButton('Auto');
  autoBtn.class('autoBtn');
  autoBtn.position(width*0.91, height*0.7);
  autoBtn.size(height*0.05, height*0.05);
  
  poseBtn = createButton('POSE');
  poseBtn.class('poseBtn');
  poseBtn.position(width-(width*0.2), height*0.88-(height*0.09)/2);
  poseBtn.size(height*0.09, height*0.09);
  
  
  shutterBtn.mousePressed(capture);
  poseBtn.mousePressed(posetab);
  captureBtn();
  
}

function draw() {
  image(video, 0, height*0.08);
  image(menu, width*0.03, height*0.03, width*0.06, height*0.04);
  image(flip, width*0.91, height*0.03, width*0.06, height*0.04);
}


function layoutDraw() {
  // 상단 레이아웃 박스
  fill(255);
  noStroke();
  rect(0, 0, width, height*0.08);
  
  fill(0);
  noStroke();
  rect(0, height*0.73, width, height*0.22);
}

// 캡쳐버튼 근처 꾸미기 역할 함수
function captureBtn() {
  
  fill(255);
  noStroke();
  circle(buttonX, height*0.88, height*0.13); // 0.13->0.1
  
}

// 캡쳐 버튼이 눌리면 작동하는 함수
function capture() {
  background(255);
}

function posetab() {
  isVisible = !isVisible;
  fill(0);
  noStroke();
  circle(buttonX, height*0.88, height*0.14);
  shutterBtn.hide();
  poseBtn.hide();
  
  
  fill(255, 153, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('POSE', buttonX, height*0.77); //height*0.825
  
  
  // 포즈 사진 모음
  fill(255);
  noStroke();
  rect(width*0.1, height*0.86, height*0.13, height*0.13);

  
}


