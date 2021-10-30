function preload(){

}
function setup(){

video=createCapture(VIDEO);
video.size(550,400);
canvas=createCanvas(550,500);
canvas.position(1700,400);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);

}
function gotposes(results){
    if(results.length>0){
        console.log(results);

    }
}
function modelLoaded(){
    console.log("poseNet model is initilized");

}



function draw(){
background("#361A58 ");
}