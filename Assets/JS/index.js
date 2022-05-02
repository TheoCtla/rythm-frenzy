"use strict";
let canvas;
let context;
let cercleX = randCercleX()
let cercleY = 0
let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;

window.onload = init;

function init(){
    // Get a reference to the canvas
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp){
    // Calculate how much time has passed
    secondsPassed = (timeStamp - oldTimeStamp) / 0.001;
    oldTimeStamp = timeStamp;
    // Move forward in time with a maximum amount
    secondsPassed = Math.min(secondsPassed, 0.1);
    
    // Pass the time to the update
    update();
    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(){

    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw a cercle
    
    context.fillStyle = '#ee1818';
    context.beginPath();
    context.arc(cercleX, cercleY, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();

    drawTab()
}

function update() {
    cercleY += (movingSpeed * secondsPassed);
}

function drawTab () {
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(200, 0);
    context.lineTo(200, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 550);
    context.lineTo(600, 550);
    context.stroke();

}

function randCercleX() {
    var X = [50, 150, 250, 350, 450, 550]; 
    var rand = X[(Math.random() * X.length) | 0];
    return rand
}

