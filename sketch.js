let buttonX, buttonY;
let buttonWidth = 100;
let buttonHeight = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;
  
  // rectMode 함수를 사용하여 사각형 모드를 CENTER로 설정
  rectMode(CENTER);
  background(160);
  
  // 버튼을 중심에 그리기
  drawButton();
  captureBtn();
  autobtn_draw();
}

function draw() {
  // 화면을 그리는 다른 코드
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
  circle(buttonX, height*0.9 ,150);
  
  fill(0);
  circle(buttonX, height*0.9 ,130);
  
  fill(255);
  circle(buttonX, height*0.9 ,120);
  
  
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
