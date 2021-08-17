function setup() {

canvas=createCanvas(640, 420)
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects!";

}

img="";
status="";

function preload() {

 img=loadImage('car.jpg');

}

function draw() {

image(img, 0,0,640,420);
fill("black");
text("Car", 50, 50);
stroke("red");
noFill();
rect(20,70,550,250);
}

function modelLoaded() {

console.log("Model Loaded! Have Fun!")
status=true;
objectDetector.detect(img,gotResult);

}

function gotResult(error, results) {

if (error=true)
console.log(error);
console.log(results);
}

