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
    