function Happiness(){
  this.happybit = [];
  
  this.happybit[1] = new Mover(30, 30, 30, 30);
  this.happybit[2] = new Mover(300, 10, -20, 10);
  this.happybit[3] = new Mover(10, 550, 40, -20);
  
  this.display = function(){
    for(i=1; i<4; i++){
      this.happybit[i].display();
      this.happybit[i].limit();
      this.happybit[i].update();
    } //for loop
  } //display
} //happiness