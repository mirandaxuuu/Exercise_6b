function RectBites(X1, Y1, wid, len) {

  this.display = function() {
    if (mouseX < 300 && mouseY < 300) {
      rectEachBite(255, 220, 151, X1, Y1, wid, len); //eats 1st burger
    } else if (mouseX < 300 && mouseY > 300) {
      push();
      translate(0, 300);
      rectEachBite(255, 220, 226, X1, Y1, wid, len); //eats 4th burger
      pop();
    } else if (mouseX > 300 && mouseY < 300) {
      push();
      translate(300, 0);
      rectEachBite(255, 166, 138, X1, Y1, wid, len); //eats 2nd burger
      pop();
    } else if (mouseX > 300 && mouseY > 300) {
      push();
      translate(300, 300);
      rectEachBite(212, 186, 165, X1, Y1, wid, len); //eats 3rd burger
      pop();
    }
  } //display
} // class


function rectEachBite(r, g, b, X1, Y1, wid, len) {
  rectMode(CORNER);
  noStroke();
  fill(r, g, b);
  rect(X1, Y1, wid, len);

} // end of rectEachBite