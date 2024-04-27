// variables for player and movement
var playerX = 100;
var playerY = 100;
var w = 87; // Up
var s = 83; // Down
var a = 65; // Left
var d = 68; // Right

// moving obstacles
var obstacleX = 30;
var obstacleY = 50;
var obstacleXSpeed;
var obstacleYSpeed;

// shape created on mouse click
var mouseShapeX;
var mouseShapeY;

// setup the game environment
function setup() {
    createCanvas(800, 600);
    initializeObstacleSpeed();
    initializePlayer(200, 350);
}

// draw loop
function draw() {
    prepareBackground();
    createBorders(10);

    displayExitSign();
    managePlayer();

    drawAndMoveObstacle();
    checkExitCondition();

    drawMouseShape();
}

// random speeds for the obstacle
function initializeObstacleSpeed() {
    obstacleXSpeed = getRandomSpeed();
    obstacleYSpeed = getRandomSpeed();
}

// random speed for obstacle movement
function getRandomSpeed() {
    return Math.floor(Math.random() * 5) + 1;
}

// initial player position
function initializePlayer(x, y) {
    playerX = x;
    playerY = y;
}

// background settings
function prepareBackground() {
    background(120, 45, 78);
    stroke(0);
    fill(0);
}

// borders around the playable area
function createBorders(thickness) {
    rect(0, 0, width, thickness); // Top border
    rect(0, 0, thickness, height); // Left border
    rect(0, height - thickness, width, thickness); // Bottom border
    rect(width - thickness, 0, thickness, height - 50); // Right border
}

// exit sign
function displayExitSign() {
    textSize(16);
    text("EXIT", width - 50, height - 50);
}

// player movement and drawing
function managePlayer() {
    handlePlayerMovement();
    drawPlayer();
}

// key presses
function handlePlayerMovement() {
    if (keyIsDown(w)) {
        playerY -= 10;
    }
    if (keyIsDown(s)) {
        playerY += 10;
    }
    if (keyIsDown(a)) {
        playerX -= 10;
    }
    if (keyIsDown(d)) {
        playerX += 10;
    }
}

// draw the player on the canvas
function drawPlayer() {
    fill(23, 40, 123);
    circle(playerX, playerY, 25);
}

// move the obstacle across the screen
function drawAndMoveObstacle() {
    fill(13, 145, 14);
    circle(obstacleX, obstacleY, 10);

    // move the obstacle
    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;

    // reset position
    if (obstacleX > width) {
        obstacleX = 0;
    } else if (obstacleX < 0) {
        obstacleX = width;
    }
    if (obstacleY > height) {
        obstacleY = 0;
    } else if (obstacleY < 0) {
        obstacleY = height;
    }
}

// check if the player has reached the exit area
function checkExitCondition() {
    if (playerX > width - 50 && playerY > height - 50) {
        textSize(26);
        fill(0);
        text("You Win!", width / 2 - 50, height / 2);
    }
}

// draw the shape on click
function drawMouseShape() {
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

// update shape position on click
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}