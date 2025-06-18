var img;
var xTrator = -200; 
var velocidade = 3; 

function preload() {
  img = loadImage("Preparacion-del-suelo-de-maiz-y-requisitos-para-la-siembra.jpg");
}

function setup() {
  createCanvas(800, 700);
  textSize(14);
}

function draw() {
  background(220);
  
  if (img) {
    image(img, 10, 20, 800, 600);
  }
  
  desenharTrator(xTrator);
  
  xTrator += velocidade;
  

  if (xTrator > width) {
    xTrator = -300;
  }
}

function desenharTrator(posX) {


  fill(40);
  circle(posX + 140, 395, 100);  
  fill(200);
  circle(posX + 140, 395, 50);
  
  rect(290, 350, 10, 40) 
  
  
  fill(40);
  circle(posX + 350, 399, 50); 
  fill("red");
  circle(posX + 350, 399, 20);
 
  fill("red");
  rect(posX + 110, 270, 270, 80);
 
  fill(20);
  rect(posX + 110, 140, 110, 130);
  fill(240);
  text("AGRO E TUDO", posX + 115, 160);
  
  
  fill(30);
  rect(posX + 110, 100, 3, 40);
  
 
  fill("#1D8021");
  rect(posX + 110, 70, 50, 33);
  fill("#F3DF2A");
  ellipse(posX + 135, 86, 50, 30);
  fill("#094F86");
  circle(posX + 135, 86, 25);
  fill(250);
  rect(posX + 124, 83, 23, 6);
 
  fill(180);
  rect(posX + 280, 170, 20, 100);
  
  
  fill(240);
  rect(posX + 180, 280, 150, 20);
  
 
  fill(0);
  text("massey ferguson", posX + 185, 295);

  
  fill(30);
  rect(posX + 380, 310, 40, 40);
  
}