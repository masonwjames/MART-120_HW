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

    //face
    drawEye(width / 2 - headWidth / 4, height / 2 - headHeight / 4);
    drawEye(width / 2 + headWidth / 4, height / 2 - headHeight / 4);
    drawNose(width / 2, height / 2 + headHeight / 8);
    drawMouth(width / 2, height / 2 + headHeight / 4);
    drawMustache(width / 2, height / 2 + headHeight / 6);
    drawEar(width / 2 - headWidth / 2, height / 2);
    drawEar(width / 2 + headWidth / 2, height / 2);

}

function drawEye(x, y) {
  fill(255);
  ellipse(x, y, 60, 40);
  fill(34, 139, 34);
  ellipse(x, y, 40, 40);
  fill(0);
  ellipse(x, y, 20, 20);
}

function drawNose(x, y) {
    fill(215, 175, 125);
    stroke(0);
    strokeWeight(2);
    triangle(x, y - 10, x - 10, y + 30, x + 10, y + 30); 
}

function drawMouth(x, y) {
    fill(255, 192, 203); 
    noStroke();
    ellipse(x, y, 100, 50); 
    // Draw teeth
    fill(255);
    rect(x - 35, y - 5, 20, 30, 5); 
    rect(x - 5, y - 5, 20, 30, 5); 
    rect(x + 25, y - 5, 20, 30, 5); 
}

function drawMustache(x, y) {
    fill(0); 
    rect(x, y, 100, 20, 5); 
  }

function drawEar(x, y) {
    fill(240, 200, 150);
    ellipse(x, y, 40, 60);
    // Draw stud piercing
    fill(255);
    ellipse(x, y + 25, 10, 10);
}