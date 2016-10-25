function Smile() {
  this.display = function() {

      strokeWeight(3);
      stroke(0);
      line(50, 80, 120, 120);
      line(50, 160, 120, 120); //left eye
      line(250, 80, 180, 120);
      line(250, 160, 180, 120); //right eye

      // smiley mouse
      noFill();
      beginShape();
      curveVertex(150, 200);
      curveVertex(100, 200);
      curveVertex(130, 240);
      curveVertex(150, 200);
      curveVertex(150, 200);
      endShape();

      noFill();
      beginShape();
      curveVertex(150, 200);
      curveVertex(200, 200);
      curveVertex(170, 240);
      curveVertex(150, 200);
      curveVertex(150, 200);
      endShape();


    } //display
} //smile