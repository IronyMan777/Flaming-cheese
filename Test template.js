/*@pjs preload="RA.jpg";*/

PImage test;

void setup() {
	size(800,600);
	test = loadImage("RA.jpg");
}

void draw() {
	background(0,0,0);
	image(test, 400, 300,100,100);
}
