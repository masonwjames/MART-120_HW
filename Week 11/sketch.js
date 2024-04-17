// player
var playerX = 100;
var playerY = 100;
var playerSize = 20;

// moving obstacles
var obstacles = [];

// static obstacle with mouse click
var mouseObstacleX;
var mouseObstacleY;

// exit
var exitX, exitY, exitWidth, exitHeight;
var gameIsActive = true;

function setup() {
    createCanvas(800, 600);

    // initialize moving obstacles
    for (var i = 0; i < 3; i++) {
        obstacles.push({
            x: random(width),
            y: random(height),
            size: random(40, 80), // minimum size increased to twice
            xSpeed: random(-1, 1),
            ySpeed: random(-1, 1),
            sizeChange: random(-0.2, 0.2), // slight size change rate
            color: random(100, 255)
        });
    }

    // set exit position and size
    exitX = width - 100;
    exitY = height - 100;
    exitWidth = 50;
    exitHeight = 50;
}

function draw() {
    background(240);

    // borders and exit sign
    createBorders(10);
    textSize(16);
    fill(0);
    text("EXIT", exitX, exitY + exitHeight / 2); // adjust text position for better visibility

    // draw and move player
    drawPlayer();
    movePlayer();

    // draw and move obstacles
    obstacles.forEach(function(obstacle, index) {
        drawObstacle(obstacle);
        moveObstacle(obstacle);
    });

    // draw static obstacle on mouse click
    fill(120);
    ellipse(mouseObstacleX, mouseObstacleY, 25);

    // check if the player has reached the exit
    checkExit();
}

function checkExit() {
    // check overlap
    if (playerX > exitX - playerSize && playerX < exitX + exitWidth &&
        playerY > exitY - playerSize && playerY < exitY + exitHeight) {
        textSize(26);
        fill(0);
        text("You Win!", width / 2 - 50, height / 2); // center text
        noLoop(); // stop the draw loop when game won
    }
}

function movePlayer() {
    if (keyIsDown(87)) { // W
        playerY -= 10;
    }
    if (keyIsDown(83)) { // S
        playerY += 10;
    }
    if (keyIsDown(65)) { // A
        playerX -= 10;
    }
    if (keyIsDown(68)) { // D
        playerX += 10;
    }
}

function drawPlayer() {
    fill(255, 0, 0); // red player
    ellipse(playerX, playerY, playerSize);
}

function createBorders(thickness) {
    // create borders
    fill(0);
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function drawObstacle(obstacle) {
    fill(obstacle.color);
    ellipse(obstacle.x, obstacle.y, obstacle.size);
}

function moveObstacle(obstacle) {
    obstacle.x += obstacle.xSpeed;
    obstacle.y += obstacle.ySpeed;
    obstacle.size += obstacle.sizeChange;

    // adjust size within bounds
    if (obstacle.size > 80 || obstacle.size < 40) {
        obstacle.sizeChange *= -1; // reverse size change direction
    }

    // randomly adjust speed
    if (frameCount % 60 === 0) { 
        obstacle.xSpeed = random(-1.5, 1.5);
        obstacle.ySpeed = random(-1.5, 1.5);
    }

    // wrap around logic 
    if (obstacle.x > width || obstacle.x < 0 || obstacle.y > height || obstacle.y < 0) {
        obstacle.x = obstacle.x > width ? 0 : (obstacle.x < 0 ? width : obstacle.x);
        obstacle.y = obstacle.y > height ? 0 : (obstacle.y < 0 ? height : obstacle.y);
        obstacle.color = random(100, 255); // change color randomly
    }
}

function mouseClicked() {
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;
}