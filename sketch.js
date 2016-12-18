var backcolor;
var fillcolor;
var gameSizeX = 1280;
var gameSizeY = 960;
var gridSize = 20;
var game;
var s;
var focus;
var points;

function setup() {	// (windowWidth, windowHeight);
	gameSizeX = floor((windowWidth - 40) / 20) * 20;
	gameSizeY = floor((windowHeight - 40) / 20) * 20;

  createCanvas(gameSizeX, gameSizeY);
  backcolor = color(120, 155, 180);
  fillcolor = color(100, 200, 130);
	game = new gameEntity();
  s = new snake();
	s.length = 2;
	s.hist[0] = createVector(s.x, s.y);
	s.hist[1] = createVector(s.x - 1, s.y);
	generateFood();
	focus = true;
	points = 0;
}

function draw() {
	if (!focused) {
    lostFocus();
  } else if (focus === false) {
  	wonFocus();
  } else {
		frameRate(4 + floor(s.length/10));
		s.move();
		game.draw();
	}
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
			if (s.dir != 0) {
	      s.dir = 1;
			}
      break;
    case RIGHT_ARROW:
      if (s.dir != 1) {
      	s.dir = 0;
      }
      break;
    case UP_ARROW:
      if (s.dir != 3) {
				s.dir = 2;
			}
      break;
    case DOWN_ARROW:
			if (s.dir != 2) {
      	s.dir = 3;
			}
      break;
    default:
  }
}
