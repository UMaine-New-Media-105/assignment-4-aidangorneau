// arrays for colors and sizes of the shapes
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
let sizes = [0.8, 0.9, 1, 1.1, 1.2]
function setup() {
  createCanvas(900, 500);
  angleMode(DEGREES);
  // variables for grid and loops
  shapeWidth = 100;//shapes size for loops
  shapeHeight = 100;
  shapesRow = 8;//number of shapes in each row and column for loops
  shapesColumn = 7;
  horizontalSpace = -5;//space between shapes for loops
  verticalSpace = 25;
  noLoop();//so colors dont flash
  
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
      let heartColors = random(colors);
      let heartSizes = random(sizes);
      addShapes(random(sizes), offsetRight, offsetDown);//calls in the shapes function with random size and set positions
    }
  }
}

function addShapes(heartScale, x, y){// makes the shapes
  push()
  fill(random(colors));//random color from the array
  translate(x, y)
  scale(heartScale)//random size from the array
  //beginshape which draws lines from each point to make the heart
  beginShape();
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
  fill(random(colors));//random color from the array
  scale(heartScale)//random size from the array
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  fill(random(colors));//random color from the array
  scale(heartScale)//random size from the array
  arc(20, 20, 20, 20, 20, 250)//arc in top left corner
  pop()
}
