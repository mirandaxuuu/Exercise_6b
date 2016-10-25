var Mover = function(x1, y1, x2, y2) {
  this.posX = x1;
  this.posY = y1;
  this.speedX = x2;
  this.speedY = y2;
  
  this.position = createVector(this.posX, this.posY);
  this.velocity = createVector(this.speedX, this.speedY);

  this.display = function() {
    noStroke();
    fill(232, 129, 86, 180);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 30, 30);
    rectMode(CORNER);
  } //display

  this.limit = function() {
    if (this.position.x > width) {  
      this.position.x = this.posX;
    }

    if (this.position.y > height) {
      this.position.y = this.posY;
    }
  } //limit
  
  this.update = function() {
    this.position.add(this.velocity);
  } //update

} //mover