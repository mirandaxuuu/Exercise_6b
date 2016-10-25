function MySmile() {
  this.display = function() {
      if (mouseX < 300 && mouseY < 300) {
        smile.display();
      } else if (mouseX < 300 && mouseY > 300) {
        push();
        translate(0, 300);
        smile.display();
        pop();
      } else if (mouseX > 300 && mouseY < 300) {
        push();
        translate(300, 0);
        smile.display();
        pop();
      } else if (mouseX > 300 && mouseY > 300) {
        push();
        translate(300, 300);
        smile.display();
        pop();
      }

    } //display
} //class