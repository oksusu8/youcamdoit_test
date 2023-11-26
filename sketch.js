let video;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cam");
  
  video = createCapture(VIDEO);
  //video.size(windowWidth, windowHeight);

  video.hide();
}

function draw() {
  //background(0);
    // 카메라
  image(video, 0, 0);
}