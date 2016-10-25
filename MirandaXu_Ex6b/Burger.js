function Burger() {
  this.eat = function() {
      if (mouseIsPressed) {
        counter = counter + 1;
      } //end of if

      //limit the counter from 0 to 5
      if (counter > 5) {
        counter = 0;
      }

      if (counter === 0) {
        bite.firstbite();
        //parameters decide the size of the bites
      }

      if (counter == 1) {
        bite.secondbite();
      }

      if (counter == 2) {
        rectbite1.display();
      }

      if (counter == 3) {
        bite.thirdbite();
        bite.fourthbite();
      }

      if (counter == 4) {
        rectbite2.display();

        //after the burger is eaten, show a smile
        mySmile.display();
      }

    } //eat
} //class