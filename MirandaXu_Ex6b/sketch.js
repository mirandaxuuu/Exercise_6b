var sections;
var burgers;
var triangles = [];
var bite;
var smile;
var crumbs;
var rectbite1;
var rectbite2;
var elli;
var rectangle;
var mySmile;
var burger;
var happiness; //the part that uses vectors


counter = 0; // counts time of mouse press

function setup() {
  createCanvas(600, 600);

  sections = new Sections();
  burgers = new Burgers();
  bite = new TriBites();
  smile = new Smile();
  crumbs = new Crumbs(mouseX + random(-20, 20), mouseY + random(-20, 20));
  rectbite1 = new RectBites(150, 0, 150, 300);
  rectbite2 = new RectBites(0, 0, 300, 300);
  elli = new Ellipse();
  rectangle = new Rectangle();
  mySmile = new MySmile();
  burger = new Burger();
  happiness = new Happiness(); //the part that uses vectors


}

function draw() {
  sections.display();

  burgers.display();
  burgers.interact();

  crumbs.display();

  if(keyIsPressed){
    happiness.display();
  }
  
} //draw
