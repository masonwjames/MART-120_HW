function setup() 
{
    createCanvas(400, 400);
}

function draw() 
{
    background(224, 224, 224);
    textSize(22)
    text("SELF PORTRAIT", 112, 30);
}

function draw()
{
    //head
    fill(240, 200, 150);
    let headWidth = 200;
    let headHeight = 250;
    let cornerRadius = 20;
    rectMode(CENTER);
    rect(width / 2, height / 2, headWidth, headHeight, cornerRadius);

    //eyes
    drawEye(width / 2 - headWidth / 4, height / 2 - headHeight / 4);
    drawEye(width / 2 + headWidth / 4, height / 2 - headHeight / 4);
}

function drawEye(x, y) {
  // Draw whites of the eyes
  fill(255);
  ellipse(x, y, 60, 40);

  // Draw forest green iris
  fill(34, 139, 34);
  ellipse(x, y, 40, 40);

  // Draw black pupil
  fill(0);
  ellipse(x, y, 20, 20);
}

function drawNose(x, y) {
    fill(215, 175, 125);
    stroke(0);
    strokeWeight(2);
    triangle(x, y - 10, x - 10, y + 20, x + 10, y + 20); 
}

function drawMouth(x, y) {
    fill(255, 192, 203); 
    noStroke();
    ellipse(x, y, 70, 30); 
    // Draw teeth
    fill(255);
    rect(x - 20, y, 10, 15, 5); 
    rect(x + 10, y, 10, 15, 5); 
}