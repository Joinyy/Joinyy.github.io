var backcolor;
var fillcolor;
var gameSizeX = 1280;
var gameSizeY = 960;
var gridSize = 20;
var game;
var s;
var focus;
var points;
var touchEnable;
var song;
var playing;

function preload() {
	touchEnable = detectmob();
	if (touchEnable) {
		gameSizeX = floor((windowWidth - 100) / 40) * 40;
		gameSizeY = floor((windowHeight - 100) / 40) * 40;
		gridSize = 20;
		playing = false;
	} else {
		gameSizeX = 15 * 20;
		gameSizeY = 15 * 20;
		song = loadSound('snake.ogg');
	}
}

function setup() {
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
	if (!touchEnable) {
		song.loop();
		song.setVolume(0.5);
		playing = true;
	}
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
		case 32:
			if (playing === true) {
				song.pause();
				playing = false;
			} else if (!touchEnable) {
				song.play();
				playing = true;
			}
			break;
		default:
	}
}

function touchStarted() {
	if (touchEnable) {
		var deltaX = game.transformEllipse(s.x) - mouseX;
		var deltaY = game.transformEllipse(s.y) - mouseY;
		var a = atan2(deltaY, deltaX);
		var deg = degrees(a);
		if (deg >= 135) {
			if (s.dir != 1) {
				s.dir = 0;
			}
		} else if (deg >= 45) {
			if (s.dir != 3) {
				s.dir = 2;
			}
		} else if (deg >= -45) {
			if (s.dir != 0) {
				s.dir = 1;
			}
		} else if (deg >= -135) {
			if (s.dir != 2) {
				s.dir = 3;
			}
		} else {
			if (s.dir != 1) {
				s.dir = 0;
			}
		}
	}
	return false;
}

node.ontouchstart = function(evt){
	if (touchEnable) {
		var deltaX = game.transformEllipse(s.x) - evt.changedTouches[0].screenX;
		var deltaY = game.transformEllipse(s.y) - evt.changedTouches[0].screenY;
		var a = atan2(deltaY, deltaX);
		var deg = degrees(a);
		if (deg >= 135) {
			if (s.dir != 1) {
				s.dir = 0;
			}
		} else if (deg >= 45) {
			if (s.dir != 3) {
				s.dir = 2;
			}
		} else if (deg >= -45) {
			if (s.dir != 0) {
				s.dir = 1;
			}
		} else if (deg >= -135) {
			if (s.dir != 2) {
				s.dir = 3;
			}
		} else {
			if (s.dir != 1) {
				s.dir = 0;
			}
		}
	}
}
