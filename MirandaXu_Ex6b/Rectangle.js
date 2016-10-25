function Rectangle() {
  this.rectX = 20;
  this.rectY = 300;
  this.lineColor = 160;

  this.move = function(speed, tranX) {

      stroke(this.lineColor, 120, 5, tranX);
      strokeWeight(1);
      noFill();
      rectMode(CENTER);
      rect(150, 150, this.rectX, this.rectX);
      this.rectX = this.rectX + speed;
      this.lineColor = this.lineColor + 5;
      if (this.rectX > 300) {
        this.rectX = 0;
      } // end of if loop
      if (this.lineColor > 255) {
        this.lineColor = 180;
      }

      rect(150, 150, this.rectY, this.rectY);
      this.rectY = this.rectY - speed;
      this.lineColor = this.lineColor + 5;
      if (this.rectY < 20) {
        this.rectY = 300;
      } // end of if loop
      if (this.lineColor > 255) {
        this.lineColor = 180;
      }

    } // move
} //class