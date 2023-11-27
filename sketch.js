let buttonX, buttonY;
let buttonWidth = 100;
let buttonHeight = 40;

//let shutter_img;

function preload() {
  //shutter_img = loadImage('images/shutter.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;
  
  //background(160);
  
  
  layoutDraw();
  
  // rectMode 함수를 사용하여 사각형 모드를 CENTER로 설정
  rectMode(CENTER);

  
  
  drawButton();
  captureBtn();
  autobtn_draw();
  
}


function layoutDraw() {
  // 상단 레이아웃 박스
  fill(255,0,0);
  noStroke();
  rect(0, 0, width, height*0.08);
  
  fill(0,255,0);
  noStroke();
  rect(0, height*0.08, width, height*0.7);
  
  fill(0,0,255);
  noStroke();
  rect(0, height*0.7, width, height*0.22);
  
}



function autobtn_draw() {
  fill(255);
  rect(buttonX, 0+buttonHeight/2, buttonWidth, buttonHeight);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Auto", buttonX, 0+buttonHeight/2);
}


function captureBtn() {
  fill(255);
  noStroke();
  circle(buttonX, height*0.89, height*0.07);
  fill(0);
  //circle(buttonX, height*0.89 ,windowWidth*0.175);
  fill(255);
  //circle(buttonX, height*0.89 ,windowWidth*0.15);
  

}

function drawButton() {
  // 버튼 그리기
  fill(50, 150, 200);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  
  // 버튼 텍스트 그리기
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("버튼", buttonX, buttonY);
}








function mousePressed() {
  // 마우스 클릭이 버튼 내에 있는지 확인
  if (
    mouseX > buttonX - buttonWidth / 2 &&
    mouseX < buttonX + buttonWidth / 2 &&
    mouseY > buttonY - buttonHeight / 2 &&
    mouseY < buttonY + buttonHeight / 2
  ) {
    // 버튼이 클릭되면 동작 수행
    console.log("버튼이 클릭되었습니다!");
  }
}
