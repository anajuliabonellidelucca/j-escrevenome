function setup() {
  createCanvas(800, 1200);
  background("rgb(218,218,218)")
}

function draw() {
  stroke("blue");
  fill("#03A9F4");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}

  
