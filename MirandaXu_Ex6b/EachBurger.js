function EachBurger(r, g) { //r and g allow user to manually adjust the color of burger
  this.r = r;
  this.g = g;
  this.display = function() {
      noStroke();
      fill(212 - this.r, 162 - this.g, 90);
      ellipse(150, 200, 180, 90); //base bread

      fill(163 - this.r, 122 - this.g, 39);
      ellipse(150, 180, 180, 100); //beef

      fill(255 - this.r, 92 - this.g, 72);
      ellipse(110, 170, 90, 80);
      ellipse(190, 170, 90, 80); //tomatoes

      fill(255 - this.r, 234 - this.g, 96);
      quad(45, 180, 140, 220, 245, 180, 150, 130); //cheese

      fill(179 - this.r, 232 - this.g, 65);
      triangle(120, 200, 170, 220, 220, 150);
      triangle(80, 150, 70, 200, 150, 200);
      triangle(230, 150, 225, 200, 150, 190); //lettuce

      fill(212 - this.r, 162 - this.g, 90);
      ellipse(150, 150, 180, 110); //top bread

      stroke(255 - this.r, 241, 185, 200);
      strokeWeight(5);
      point(150, 150);
      point(100, 170);
      point(130, 120);
      point(110, 150);
      point(156, 110);
      point(130, 180);
      point(200, 130);
      point(190, 180); //sesame on top
    } //display
} //class