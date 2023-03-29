let offest;
let xcoord = 0; //stating global variables
let ycoord = 0; 
let color = 255;
function setup() {
  createCanvas(400, 400);
  offset = width / 10;
  noLoop(); //makes the squares stay on screen
  tileRow = 10 //sprite per row
  tileColumn = 6 //sprites per column
  tileWidth = width/tileRow // spreads out the sprites evenly along the canvas
  tileHeight = height/tileColumn
}

function draw() {
  background(220);
  for (let xsquares = 0; xsquares < tileColumn; xsquares++) {
    //loop calling the amount of columns stated
    for (let ysquares = 0; ysquares < tileRow; ysquares++) {
      //loop calling the amount of rows stated
      let offsetright = ysquares * tileWidth //
      let offsetleft = xsquares * tileWidth
      fill(0 - ycoord, color - xcoord, color - ycoord); //picks the gradient colors for each square
      sprites(xcoord * offset, ycoord * offset); //calls the square function
      xcoord += 30; //increase the x and y coord for each new time
    }
    xcoord = 0; // resetting the x coordinate for the next row
    ycoord += 30;//increasing the y coordinate after the inner loop
  }
}
function sprites(x, y) {//drawing the flower function
  //draws the square at each new x and y coord
  push();
  translate(200, 200);//move to a position
  scale(0.4);//size
  for (let linesDrawn = 0; linesDrawn < 9; linesDrawn++) {//draws the petal pattern for the flower
    ellipse(xcoord, ycoord, 30);//the circles that make up the petals
    rotate(30);
  }
  pop();
  fill("yellow");
  ellipse(xcoord, ycoord, 30);//the center of the flower
}
