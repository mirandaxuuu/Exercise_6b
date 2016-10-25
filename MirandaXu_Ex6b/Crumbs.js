function Crumbs(x, y) { // random crumbs around mouse cursor
  x = this.x
  y = this.y

  this.display = function() {

    frameRate(7);
    noStroke();
    fill(random(255), random(255), random(255)); //two round crumbs
    ellipse(this.x, this.y, 8, 8);
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 8, 8);

    fill(random(255), random(255), random(255)); //1st triangle crumb
    a = mouseX + random(20, 40);
    b = mouseY + random(20, 40);
    triangle(a, b, a + 10, b - 10, a + 15, b + 5);

    fill(random(255), random(255), random(255)); //2nd triangle crumb
    c = mouseX - random(10, 30);
    d = mouseY - random(10, 30);
    triangle(c, d, c, d - 10, c + 15, d - 5);

  } //display

} //class