function Sections() { //4 sections background
  this.display = function() {
    noStroke();
    fill(255, 220, 151);
    rect(0, 0, 300, 300); //upper left section 1
    fill(255, 166, 138);
    rect(300, 0, 300, 300); //upper right section 2
    fill(212, 186, 165);
    rect(300, 300, 300, 300); //lower right section 3
    fill(255, 220, 226);
    rect(0, 300, 300, 300); //lower left section 4
  }

} //end of sections