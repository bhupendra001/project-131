img="";
status = "";

function preload(){

img = loadImage("dog_cat.jpg")

}

function setup(){

canvas = createCanvas(640,420);
canvas.center();

objectdetector = ml5.objectDetector('cocossd',modelloaded);

document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTING";

}

function draw(){

image(img,0,0,640,420);
fill("#FF0000");
text('dog',45 ,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
text('cat',320 ,120);
noFill();
stroke("#FF0000");
rect(300,90,270,320);
}





function modelloaded(){

console.log("model is loaded");
status = true;
objectdetector.detect(img,gotresult);

}

function gotresult(error,results){

if(error){

console.error(error);

}

else{

console.log(results);

}

}