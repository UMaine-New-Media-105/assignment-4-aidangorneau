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
      //let heartColors = random(colors);
      //let heartSizes = random(sizes);
      addShapes(1, offsetRight, offsetDown);//calls in the shapes function with random size and set positions
    }
  }
}

function addShapes(heartScale, x, y){// makes the shapes
  push()
  fill("red");//
  translate(x, y)
  scale(1)//
  //beginshape which draws lines from each point to make the heart
  beginShape();
  vertex(40, 20);
  vertex(60, 0);
  vertex(80, 20);
  vertex(40, 80);
  vertex(0, 20);
  vertex(20, 0);
  endShape(CLOSE);
  fill("green");//
  scale(1.1)//
  ellipse(55, 55, 20)//circle pattern
  ellipse(50, 50, 15)
  ellipse(45, 45, 10)
  fill("blue");//
  scale(1.2)//
  arc(20, 20, 20, 20, 20, 250)//arc in top left corner
  pop()
}
