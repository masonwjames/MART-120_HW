var headX = 250;
var headY = 100;
var headSize = 200; // Initial size of the head
var sizeDirection = 2; // Direction of size change

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);
    //title
    fill(0);
    textSize(32);
    textAlign(CENTER, TOP);
    text("SELF PORTRAIT", width / 2, 20);

    // Update head size
    headSize += sizeDirection;
    if (headSize >= 250 || headSize <= 150) {
        sizeDirection *= -1; // Reverse the direction when reaching the size limits
    }

    //head
    fill(240, 200, 150);
    var cornerRadius = 20;
    rectMode(CENTER);
    rect(headX, headY, headSize, headSize, cornerRadius);

    //beanie
    fill(51, 25, 0);
    var beanieSize = headSize + 20;
    ellipse(headX, headY - headSize / 2 - 10, beanieSize, headSize / 3);

    //face
    var eyeOffset = headSize / 4;
    drawEye(headX - eyeOffset, headY - eyeOffset);
    drawEye(headX + eyeOffset, headY - eyeOffset);
    drawEyebrows(headX - eyeOffset, headY - headSize / 5 - 30);
    drawEyebrows(headX + eyeOffset, headY - headSize / 5 - 30);
    drawNose(headX, headY + headSize / 20);
    drawMouth(headX, headY + headSize / 4);
    drawMustache(headX, headY + headSize / 6);
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
    // Draw teeth
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
    // Draw stud piercing
    fill(255);
    var studSize = 10;
    ellipse(x, y + earHeight / 2.5, studSize, studSize);
}

function drawEyebrows(x, y) {
    stroke(0);
    strokeWeight(5);
    var eyebrowLength = 20;
    var eyebrowOffset = 10;
    line(x - eyebrowOffset, y - 10, x + eyebrowOffset, y - 10);
}