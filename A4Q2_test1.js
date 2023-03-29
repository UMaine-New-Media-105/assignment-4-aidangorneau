let xcoord = 0
let ycoord = 0
let offset
function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  offset = width/5;
  noLoop();
  tileRow = 9
  tileColumn = 3
  tileWidth = width/tileRow
  tileHeight = height/tileColumn
  
  flower1 = {
    startx: 100,
    starty: 60,
    scale: 1, 
    turn: 36, 
    diam: 30,
    fill: "blue"
  }
  flower2 = {
    startx: 200,
    starty: 160, 
    scale: 0.4, 
    turn: 46, 
    diam: 25, 
    fill: "green"
  }
  flower3 = {
    startx: 250, 
    starty: 260, 
    scale: 0.5,
    turn: 56, 
    diam: 20, 
    fill: "red"
  }
}

function draw() {
  background(220);


  for (let rowsDrawn = 0; rowsDrawn<tileColumn; rowsDrawn++) {
   for (let columnsDrawn = 0; columnsDrawn<tileRow; columnsDrawn++) {
     let offsetright = columnsDrawn * tileWidth
     let offsetleft = rowsDrawn * tileWidth
     flower1.x = flower1.startx+offsetright;
     flower2.x = flower2.startx+offsetright;
     flower3.x = flower3.startx+offsetright;
     flower1.y = flower1.starty+ offsetleft;
     flower2.y = flower2.starty+ offsetleft;
     flower3.y = flower3.starty+ offsetleft;
     addflower(flower1);
     addflower(flower2);
     addflower(flower3);
   }
  }
}
    


function addflower(flower) {
  push();
  fill(flower.fill);
  rotate(flower.turn);
  translate(flower.x, flower.y);
  scale(flower.scale);
  let addangle = 360/flower.turn
   for (let linesDrawn = 0; linesDrawn<flower.turn; linesDrawn++) {
     rotate(addangle)
     ellipse(0, 0, 30);
   }
  pop();
}
