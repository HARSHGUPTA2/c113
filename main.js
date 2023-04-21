function preload() {

}

function setup() {
Canvas = createCanvas(640,480);
Canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
color_tint = "";
}

function draw() {
image(video,200,140,240,180);
tint(color_tint);

fill(0, 128, 0); 
stroke(0, 128, 0);
rect(90, 40, 460, 20);
rect(90, 400, 460, 20);

rect(90, 20, 20, 380);
rect(550, 40, 20, 380);

 fill(216, 0, 0);
circle(100, 50, 80);
circle(560, 50, 80);
circle(100, 400, 80);
circle(560, 400, 80);
}

function take_snapshot(){
    save('student_name.png');
}

function ft(){
    color_tint = document.getElementById("colour_name").value;
}