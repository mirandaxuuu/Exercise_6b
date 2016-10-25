function Ellipse() {
  this.elliX = 20;
  this.elliY = 300;
  this.lineColor = 160;
  
  this.move = function(speed, tranX) {
      stroke(this.lineColor, 120, 5, tranX);
      strokeWeight(1);
      noFill();
      ellipseMode(CENTER);
      ellipse(450, 150, this.elliX, this.elliX);
      this.elliX = this.elliX + speed;
      this.lineColor = this.lineColor + 5;
      if (this.elliX > 300) {
        this.elliX = 0;
      } // end of if loop
      if (this.lineColor > 255) {
        this.lineColor = 180;
      }

      ellipse(450, 150, this.elliY, this.elliY);
      this.elliY = this.elliY - 10;
      this.lineColor = this.lineColor + 5;
      if (this.elliY < 20) {
        this.elliY = 300;
      } // end of if loop
      if (this.lineColor > 255) {
        this.lineColor = 180;
      }

    } // move

} //class