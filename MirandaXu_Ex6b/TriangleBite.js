function TriangleBite(r, g, b) { //create triangles that block the burger so it seems like the burger is eaten
  this.r = r;
  this.g = g;
  this.b = b;
  var x1;
  var x2;
  var x3;
  var y1;
  var y2;
  var y3;

  this.display = function(x1, y1, x2, y2, x3, y3) {
    noStroke();
    fill(this.r, this.g, this.b);
    triangle(x1, y1, x2, y2, x3, y3);
  }

} //class