var stars = [];
var numStars = 300;
var groundView = false;  // track if ground-level view is active
var baseCameraZ = 600;  // elevated view
var cameraZ = baseCameraZ;  // z position of the camera
var cameraY = 50;   // lower Y position
var sunSize = 40; // initial size of sun
var sunVibration = 0; // initial vibration speed of sun
var orbits = [70, 100, 130, 160, 200, 240, 280, 320];  // initial distances of planets
var condensing = false;  // track if the orbits are condensing
var supernova = false; // track if a supernova explosion is happening
var supernovaParticles = []; // array to store supernova particles
var supernovaOpacity = 0; 
var sunOpacity = 255; 
function setup() {
  createCanvas(800, 600, WEBGL);
  // stars for the background
  for (var i = 0; i < numStars; i++) {
    stars[i] = {
      x: random(-width * 2, width * 2),
      y: random(-height * 2, height * 2),
      z: random(-1000, 1000),
      size: random(0.5, 3)
    };
  }
}

function draw() {
  background(0);
  drawStars();

  // adjust camera Z
  cameraZ = baseCameraZ;  // no dynamic adjustment, static
  let targetZ = groundView ? 300 : cameraZ;
  let targetY = groundView ? 300 : 50;
  cameraZ = lerp(cameraZ, targetZ, 0.05);
  cameraY = lerp(cameraY, targetY, 0.05);
  camera(0, cameraY, cameraZ, 0, 0, 0, 0, 1, 0);

  // lighting
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);

  // update condensing orbits
  if (condensing) {
    for (let i = 0; i < orbits.length; i++) {
      // reduce each orbit gradually
      orbits[i] -= orbits[i] * 0.005; 
      if (orbits[i] <= sunSize + 5) { // if a planet enters the sun
        sunVibration = 0.03; // increase the vibration speed
        sunSize += 0.1; // increase the size of the sun gradually
      }
    }
    if (!supernova && sunSize >= width * 0.5) { // if the sun fills about 50% of the frame, supernova isn't already happening
      supernova = true; // trigger the supernova
      generateSupernovaParticles(); // generate supernova
    }
  }

  if (supernova) {
    updateSupernovaParticles();
    drawSupernova();
  } else {
    drawSolarSystem();
  }
}

function drawStars() {
  noStroke();
  fill(255);
  for (var i = 0; i < numStars; i++) {
    push();
    translate(stars[i].x, stars[i].y, stars[i].z);
    sphere(stars[i].size);
    pop();
  }
}

function drawSolarSystem() {
  push();
  noStroke();
  fill(255, 204, 0, sunOpacity);
  translate(0, 0, -5); // move sun slightly
  sphere(sunSize + sin(frameCount * sunVibration) * 5); 
  pop();

  var sizes = [4, 5, 7, 9, 12, 15, 18, 22];  // sizes of the planets
  var speeds = [0.02, 0.0175, 0.015, 0.0125, 0.01, 0.0075, 0.005, 0.0025];  // speeds of the planets

  for (var i = 0; i < orbits.length; i++) {
    push();
    rotateY(frameCount * speeds[i]);  // rotate around the sun
    translate(orbits[i], 0, 0);  // move to new orbit position
    fill(100, 100, 255);
    sphere(sizes[i]);  // draw as a sphere
    pop();
  }
}

function generateSupernovaParticles() {
  for (var i = 0; i < 500; i++) {
    supernovaParticles.push({
      x: random(-width, width),
      y: random(-height, height),
      z: random(-500, 500),
      size: random(1, 10),
      vx: random(-2, 2),
      vy: random(-2, 2),
      vz: random(-2, 2)
    });
  }
}

function updateSupernovaParticles() {
  for (var i = 0; i < supernovaParticles.length; i++) {
    supernovaParticles[i].x += supernovaParticles[i].vx;
    supernovaParticles[i].y += supernovaParticles[i].vy;
    supernovaParticles[i].z += supernovaParticles[i].vz;
  }
}

function drawSupernova() {
  // fade out the sun
  if (sunOpacity > 0) {
    sunOpacity -= 1;
  }
  // fade in the supernova
  if (supernovaOpacity < 255) {
    supernovaOpacity += 1;
  }
  noStroke();
  fill(255, 255, 0, supernovaOpacity); // yellow color with opacity
  for (var i = 0; i < supernovaParticles.length; i++) {
    push();
    translate(supernovaParticles[i].x, supernovaParticles[i].y, supernovaParticles[i].z);
    sphere(supernovaParticles[i].size);
    pop();
  }
}

function mousePressed() {
  groundView = !groundView;  // toggle between ground-level and standard views
  condensing = !condensing;  // toggle orbits condensing
}