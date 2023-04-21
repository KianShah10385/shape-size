noseX=0;
noseY=0;
LeftWristX=0;
rightWristX=0;
difference=0;



function setup() {
  video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}
function draw() {
    background('green');
    fill('goldenrod');
    stroke('blue');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);
        LeftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - rightWristX);
        console.log("leftWristX = " + LeftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
    
}
