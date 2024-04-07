function setup() 
{
    createCanvas(400, 400);
}

function draw() 
{
    background(224, 224, 224);
    textSize(22)
    text("SELF PORTRAIT", 112, 30);

    //head
    fill(240, 200, 150);
    let headWidth = 200;
    let headHeight = 250;
    let cornerRadius = 20;
    rectMode(CENTER);
    rect(width / 2, height / 2, headWidth, headHeight, cornerRadius);

    //eyes
    fill(0, 255, 0); 
  let eyeSize = 40;
  let eyeX = width / 2 - headWidth / 4; 
  let eyeY = height / 2 - headHeight / 4;
  ellipse(eyeX, eyeY, eyeSize, eyeSize);
  let eyeX2 = width / 2 + headWidth / 4; 
  ellipse(eyeX2, eyeY, eyeSize, eyeSize);


}