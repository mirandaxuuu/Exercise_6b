function TriBites() {
  triangles[1] = new TriangleBite(255, 220, 151);
  triangles[2] = new TriangleBite(255, 220, 226);
  triangles[3] = new TriangleBite(255, 166, 138);
  triangles[4] = new TriangleBite(212, 186, 165);

  this.firstbite = function() {

      if (mouseX < 300 && mouseY < 300) {
        triangles[1].display(180, 150, 280, 110, 280, 220); //eats 1st burger
      } else if (mouseX < 300 && mouseY > 300) {
        push();
        translate(0, 300);
        triangles[2].display(180, 150, 280, 110, 280, 220); //eats 4th burger
        pop();
      } else if (mouseX > 300 && mouseY < 300) {
        push();
        translate(300, 0);
        triangles[3].display(180, 150, 280, 110, 280, 220); //eats 2nd burger
        pop();
      } else if (mouseX > 300 && mouseY > 300) {
        push();
        translate(300, 300);
        triangles[4].display(180, 150, 280, 110, 280, 220); //eats 3rd burger
        pop();
      }
    } //firstbite

  this.secondbite = function() {

      if (mouseX < 300 && mouseY < 300) {
        triangles[1].display(150, 150, 300, 0, 300, 300); //eats 1st burger
      } else if (mouseX < 300 && mouseY > 300) {
        push();
        translate(0, 300);
        triangles[2].display(150, 150, 300, 0, 300, 300); //eats 4th burger
        pop();
      } else if (mouseX > 300 && mouseY < 300) {
        push();
        translate(300, 0);
        triangles[3].display(150, 150, 300, 0, 300, 300); //eats 2nd burger
        pop();
      } else if (mouseX > 300 && mouseY > 300) {
        push();
        translate(300, 300);
        triangles[4].display(150, 150, 300, 0, 300, 300); //eats 3rd burger
        pop();
      }
    } //secondbite


  this.thirdbite = function() {

      if (mouseX < 300 && mouseY < 300) {
        triangles[1].display(300, 0, 0, 300, 300, 300); //eats 1st burger
      } else if (mouseX < 300 && mouseY > 300) {
        push();
        translate(0, 300);
        triangles[2].display(300, 0, 0, 300, 300, 300); //eats 4th burger
        pop();
      } else if (mouseX > 300 && mouseY < 300) {
        push();
        translate(300, 0);
        triangles[3].display(300, 0, 0, 300, 300, 300); //eats 2nd burger
        pop();
      } else if (mouseX > 300 && mouseY > 300) {
        push();
        translate(300, 300);
        triangles[4].display(300, 0, 0, 300, 300, 300); //eats 3rd burger
        pop();
      }
    } //thirdbite


  this.fourthbite = function() {

      if (mouseX < 300 && mouseY < 300) {
        triangles[1].display(0, 0, 300, 0, 300, 300); //eats 1st burger
      } else if (mouseX < 300 && mouseY > 300) {
        push();
        translate(0, 300);
        triangles[2].display(0, 0, 300, 0, 300, 300); //eats 4th burger
        pop();
      } else if (mouseX > 300 && mouseY < 300) {
        push();
        translate(300, 0);
        triangles[3].display(0, 0, 300, 0, 300, 300); //eats 2nd burger
        pop();
      } else if (mouseX > 300 && mouseY > 300) {
        push();
        translate(300, 300);
        triangles[4].display(0, 0, 300, 0, 300, 300); //eats 3rd burger
        pop();
      }
    } //fourthbite

} // triangleBites