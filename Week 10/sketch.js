var headX;
var headY;
var headSize = 200; // inital head size
var sizeDirection = 2; // direction of change

var eyebrowY1;
var eyebrowY2;
var eyebrowDirection1;
var eyebrowDirection2;

var beanieX;
var beanieY;
var beanieDirectionX = 1;
var beanieColor;

var mustacheX;
var mustacheY;
var mustacheDirectionX = 1;
var mustacheDirectionY = 1;

var titleSize = 32; // intial titile size
var titleDirection = 0.2; // direction of change
var titleX = 200; // intial x
var titleY = 50; // intial y
var titleSpeed = 2; // movement speed for title

function setup() {
    createCanvas(400, 400);
    // center canvas
    headX = width / 2;
    headY = height / 2;

    // intial eyebrow position
    eyebrowY1 = headY - headSize / 5 - 30;
    eyebrowY2 = headY - headSize / 5 - 30;
    // intitial direction 
    eyebrowDirection1 = 1; // up
    eyebrowDirection2 = -1; // down

    // intial beanie position
    beanieX = headX;
    beanieY = headY - headSize / 2 - 10;
    beanieColor = color(random(100, 150), random(50, 100), random(0)); // Initial brown color

    // intial mustache position
    mustacheX = headX;
    mustacheY = headY + headSize / 6;
}

function draw() {
    background(200);
    //title
    fill(0);
    textSize(titleSize);
    textAlign(CENTER, TOP);
    text("SELF PORTRAIT", titleX, titleY);

    // update title size
    titleSize += titleDirection;
    if (titleSize >= 40 || titleSize <= 28) {
        titleDirection *= -1; 
    }

    // square title pattern
    titleX += titleSpeed;
    titleY += titleSpeed;

    if (titleX + textWidth("SELF PORTRAIT") >= width || titleX <= 0) {
        titleSpeed *= -1; 
    }
    if (titleY >= height || titleY <= 0) {
        titleSpeed *= -1; 
    }

    // update head size
    headSize += sizeDirection;
    if (headSize >= 250 || headSize <= 150) {
        sizeDirection *= -1; /
    }

    // update eyebrow position
    eyebrowY1 += eyebrowDirection1;
    if (eyebrowY1 <= headY - headSize / 5 - 50 || eyebrowY1 >= headY - headSize / 5 - 10) {
        eyebrowDirection1 *= -1; 
    }
    eyebrowY2 += eyebrowDirection2;
    if (eyebrowY2 <= headY - headSize / 5 - 50 || eyebrowY2 >= headY - headSize / 5 - 10) {
        eyebrowDirection2 *= -1; 
    }

    // update beanie position
    beanieX += beanieDirectionX;
    if (beanieX <= headX - headSize / 2 || beanieX >= headX + headSize / 2) {
        beanieDirectionX *= -1; 
        beanieColor = color(random(100, 150), random(50, 100), random(0)); // Change color randomly
    }

    // update mustache position
    mustacheX += mustacheDirectionX;
    mustacheY += mustacheDirectionY;
    if (mustacheX <= headX - headSize / 6 || mustacheX >= headX + headSize / 6) {
        mustacheDirectionX *= -1; 
    }
    if (mustacheY <= headY + headSize / 6 - 10 || mustacheY >= headY + headSize / 6 + 10) {
        mustacheDirectionY *= -1; 
    }

    //head
    fill(240, 200, 150);
    var cornerRadius = 20;
    rectMode(CENTER);
    rect(headX, headY, headSize, headSize, cornerRadius);

    //beanie
    fill(beanieColor);
    var beanieSize = headSize + 20;
    ellipse(beanieX, beanieY, beanieSize, headSize / 3);

    //face
    var eyeOffset = headSize / 4;
    drawEye(headX - eyeOffset, headY - eyeOffset);
    drawEye(headX + eyeOffset, headY - eyeOffset);
    drawEyebrows(headX - eyeOffset, eyebrowY1);
    drawEyebrows(headX + eyeOffset, eyebrowY2);
    drawNose(headX, headY + headSize / 20);
    drawMouth(headX, headY + headSize / 4);
    drawMustache(mustacheX, mustacheY);
    drawEar(headX - headSize / 2, headY);
    drawEar(headX + headSize / 2, headY);

    //name
    fill(0);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text("MASON RUSEK", width / 2, height - 20);
}

function drawEye(x, y) {
    fill(255);
    var eyeSize = 60;
    ellipse(x, y, eyeSize, eyeSize);
    fill(34, 139, 34);
    var pupilSize = 40;
    ellipse(x, y, pupilSize, pupilSize);
    fill(0);
    var irisSize = 20;
    ellipse(x, y, irisSize, irisSize);
}

function drawNose(x, y) {
    fill(215, 175, 125);
    stroke(0);
    strokeWeight(2);
    var noseSize = 20;
    triangle(x, y - noseSize / 2, x - noseSize / 2, y + noseSize, x + noseSize / 2, y + noseSize);
}

function drawMouth(x, y) {
    fill(255, 192, 203);
    noStroke();
    var mouthWidth = 100;
    var mouthHeight = 50;
    ellipse(x, y, mouthWidth, mouthHeight);
    //draw teeth
    fill(255);
    var teethSize = 30;
    var teethOffset = 35;
    rect(x - teethOffset, y - 5, teethSize, teethSize, 5);
    rect(x, y - 5, teethSize, teethSize, 5);
    rect(x + teethOffset, y - 5, teethSize, teethSize, 5);
}

function drawMustache(x, y) {
    fill(0);
    var mustacheWidth = 100;
    var mustacheHeight = 20;
    rect(x, y, mustacheWidth, mustacheHeight, 5);
}

function drawEar(x, y) {
    fill(240, 200, 150);
    var earWidth = 40;
    var earHeight = 60;
    ellipse(x, y, earWidth, earHeight);
    // draw stud piercing
    fill(255);
    var studSize = 10;
    ellipse(x, y + earHeight / 2.5, studSize, studSize);
}

function drawEyebrows(x, y) {
    stroke(0);
    strokeWeight(5);
    var eyebrowLength = 20;
    var eyebrowOffset = 10;
    line(x - eyebrowOffset, y, x + eyebrowOffset, y);
}