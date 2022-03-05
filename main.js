img = "";
status = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#fc4dff");
    text("Dog", 150, 35);
    noFill();
    stroke("#fc4dff");
    rect(30, 60, 450, 350);
    
    fill("#fc4dff");
    text("Cat", 300, 150);
    noFill();
    stroke("#fc4dff");
    rect(300, 90, 270, 300);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDectector.detect(img, gotResult);
}
function gotResults(error, result){
    if(error){
        console.log(error);
    }
    console.log(results);
}