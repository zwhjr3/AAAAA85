canvas=document.getElementById('canva');
ctx=canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 85;
rimg = "rover.png";
bimg = "mars.jpg"; 
function add() 
{
    bimgTag = new Image();
    bimgTag.onload = uploadBackground;
    bimgTag.src = bimg;

    rimgTag = new Image();
    rimgTag.onload = uploadrover;
    rimgTag.src = rimg;
}

function uploadBackground() {
    ctx.drawImage(bimgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rimgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykd);

function mykd(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up() 
{
    if(rover_y >=0)
    {
rover_y = rover_y - 10;
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
    }
}

function down() 
{
    if(rover_y <=500)
    {
rover_y = rover_y + 10;
console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
    }
}

function left() 
{
    if(rover_x >= 0)
    {
rover_x = rover_x - 10;
console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
    }
}

function right() 
{
    if(rover_y <= 700)
    {
rover_x = rover_x + 10;
console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();
    }
}

nasa_mars_images_array = [ "glitchmars.jpg","mars.jpg","onscape.jpg","onerover.jpg"];
random_number = Math.floor(Math.random() * 4);
bimg = nasa_mars_images_array[random_number];
console.log("bimg = " + bimg);