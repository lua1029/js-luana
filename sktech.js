function setup() {
    createCanvas(600, 600);
  background("white");
  }
   
  function draw() {
  
    stroke("pink")
    fill("pink");
    
   // console.log( mouseIsPressed);
    
   if(mouseIsPressed) {
     rect(mouseX, mouseY,  30, 45);
    }
  }