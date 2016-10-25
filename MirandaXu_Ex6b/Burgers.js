function Burgers() {
  burger1 = new EachBurger(0, 0);
  burger2 = new EachBurger(5, 10);
  burger3 = new EachBurger(10, 15);
  burger4 = new EachBurger(10, -5);
  
  this.display = function() {
      burger1.display(); //1st burger
      push();
      translate(300, 0);
      burger2.display(); //2nd burger (upper right)
      translate(0, 300);
      burger3.display(); //3rd burger (lower right)
      translate(-300, 0);
      burger4.display(); //4th burger (lower left)
      pop();

    } //display

  this.interact = function() {
      //interactive part of my program
      burger.eat();

      rectangle.move(10, 150);
      push();
      translate(300, 300);
      rectangle.move(10, 150);
      pop();

      elli.move(18, 100);
      push();
      translate(-300, 300);
      elli.move(18, 100);
      pop();
      rectMode(CORNER);

    } //interact

} // Burgers