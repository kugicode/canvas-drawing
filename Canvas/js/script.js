// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = "royalblue";
// ctx.fillRect (50, 50, 100, 100);

// ctx.beginPath();
// ctx.fillStyle = "tomato";
// ctx.arc (200, 200, 50, 0, Math.PI * 2)
// ctx.fill();


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//circle properties
let x = 100;
let y = 100;
let radius = 30;
let dx = 2;
let dy = 2;


function drawCircle (){
    //draw circle
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    //Update directions.
    x = x + dx;
    y = y + dy;

    //if right or left side of radius hits the canvas change directions
    if(x + radius > canvas.width || x - radius < 0){
        dx = -dx;
    }
    //if top or bottom side of radius hits the canvas change directions
    if(y + radius > canvas.height || y - radius < 0){
        dy = -dy;
    }

    requestAnimationFrame(drawCircle);
}

drawCircle();