// arrays for colors and CircleSizes of the shapes
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
let CircleSizes = [0.8, 0.9, 1, 1.1, 1.2]
function setup() {
  createCanvas(1200, 600);
  angleMode(DEGREES);
  // variables for grid and loops
  shapeWidth = 100;//shapes size for loops
  shapeHeight = 100;
  shapesRow = colors.length+6;//number of shapes in each row based on the length of the color array
  shapesColumn = CircleSizes.length//number of shapes in each column based on the length of the size array
  tileWidth = width/shapesRow;
  //shapesColumn = 6;
  horizontalSpace = -5;//space between shapes for loops
  verticalSpace = 25;
  //noLoop();//so colors dont flash 
}

function draw() {
  background("grey");
  // Draw rows of shapes.
  for (let rowsDrawn = 0; rowsDrawn < shapesColumn; rowsDrawn++) {
    // Draw all the columns within a row.
    for (let columnsDrawn = 0; columnsDrawn < shapesRow; columnsDrawn++) {
      
      // Push this sprite to the right by the appropriate amount.
      let offsetRight = columnsDrawn * (shapeWidth + horizontalSpace);
      // Push this sprite down by the appropriate amount.
      let offsetDown = rowsDrawn * (shapeHeight + verticalSpace);
      let thisColor = colors[columnsDrawn % colors.length];
      //color command to corespond with each column and the length of the array
      let thisSize = CircleSizes[rowsDrawn % CircleSizes.length];
      //size command to corespond with each column and the length of the array
      addShapes(thisColor, offsetRight, offsetDown, thisSize);
      //calls in the shapes function with the color and size commands and set positions
    }
  }
}

function addShapes(color, x, y, Circlesize){// makes the shapes
  push()
  translate(x, y)//puts each group of shapes into offset position
  scale(1)//size from the array
  if (color == "red"){//checks each color coresponding to each row to make each column similar
    fill(colors[0]);// color from the array
    beginShape();//draw the heart shape
    vertex(40, 20);
    vertex(60, 0);
    vertex(80, 20);
    vertex(40, 80);
    vertex(0, 20);
    vertex(20, 0);
    endShape(CLOSE);
    fill(colors[5]);// color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
  }else if (color == "orange"){
    fill(colors[1]);//color from the array
    beginShape();//draw the heart shape
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
    fill(colors[4]);// color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
    fill(random(colors));//random color from the array
  scale(CircleSizes[0])//size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  }else if (color == "yellow"){
    fill(colors[2])//color from the array
    beginShape();//draw the heart shape
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
    fill(colors[3]);// color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
    fill(random(colors));//random color from the array
  scale(CircleSizes[1])//size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  }else if (color == "green"){
    fill(colors[3])//color from the array
    beginShape();//draw the heart shape
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
    fill(colors[2]);// color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
    fill(random(colors));//random color from the array
  scale(CircleSizes[2])//size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  }else if (color == "blue"){
    fill(colors[4])//color from the array
    beginShape();//draw the heart shape
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
    fill(colors[1]);// color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
    fill(random(colors));//random color from the array
  scale(CircleSizes[3])//size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  }else if (color == "purple"){
    fill(colors[5])//color from the array
    beginShape();//draw the heart shape
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
    scale(1);
    fill(colors[0]);//color from the array
    arc(20, 20, 20, 20, 20, 250);//arc in top left corner
    fill(random(colors));//random color from the array
  scale(CircleSizes[4])//size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  }
  pop()
}
