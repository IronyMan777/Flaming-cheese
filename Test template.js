// @pjs preload must be used to preload the image

/* @pjs preload="squiggles.jpg"; */

PImage b;

void setup() {
	size(200,200);
	b = loadImage("squiggles.jpg");
	noLoop();

}

void draw() {
	image(b, 0, 0);
}
