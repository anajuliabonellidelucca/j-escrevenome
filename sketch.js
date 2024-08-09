function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("blue");
    fill("#03A9F4");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  