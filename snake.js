function snake() {
	this.dir = 0; // right = 0, left = 1, up = 2, down = 3
	this.x = floor((game.xMax - 1) / 2);
	this.y = floor((game.yMax - 1) / 2);
	this.length = 0;
	this.hist = [];

	this.move = function() {
		switch (this.dir) {
			case 0:
				this.moveRight();
				break;
			case 1:
				this.moveLeft();
				break;
			case 2:
				this.moveUp();
				break;
			case 3:
				this.moveDown();
				break;
			default:
		}
		for (var i = 0; i < this.length; i++) {
			game.addEntity(this.hist[i].x, this.hist[i].y, "snaketail");
		}
		game.addEntity(this.x, this.y, "snake");
	}
	this.kill = function() {
		this.length = 0;
		points = 0;
		this.x = floor((game.xMax - 1) / 2);
		this.y = floor((game.yMax - 1) / 2);
		game.clearEntity();
		generateFood();
	}
	this.eat = function() {
		this.length = this.length + 1;
		if (this.length == 11) {
			generateFood();
		}
		if (this.length == 22) {
			generateFood();
		}
		generateFood();
		points ++;
	}
	this.moveRight = function() {
		this.hist[this.length] = createVector(this.x, this.y);
		game.delEntity(this.hist[0].x, this.hist[0].y);
		for (var i = 0; i < this.length; i++) {
			this.hist[i] = this.hist[i + 1];
		}
		this.x = this.x + 1;
		if (this.x == game.xMax) {
			this.x = 0;
		}
	}
	this.moveLeft = function() {
		this.hist[this.length] = createVector(this.x, this.y);
		game.delEntity(this.hist[0].x, this.hist[0].y);
		for (var i = 0; i < this.length; i++) {
			this.hist[i] = this.hist[i + 1];
		}
		this.x = this.x - 1;
		if (this.x < 0) {
			this.x = game.xMax - 1;
		}
	}
	this.moveUp = function() {
		this.hist[this.length] = createVector(this.x, this.y);
		game.delEntity(this.hist[0].x, this.hist[0].y);
		for (var i = 0; i < this.length; i++) {
			this.hist[i] = this.hist[i + 1];
		}
		this.y = this.y - 1;
		if (this.y < 0) {
			this.y = game.yMax - 1;
		}
	}
	this.moveDown = function() {
		this.hist[this.length] = createVector(this.x, this.y);
		game.delEntity(this.hist[0].x, this.hist[0].y);
		for (var i = 0; i < this.length; i++) {
			this.hist[i] = this.hist[i + 1];
		}
		this.y = this.y + 1;
		if (this.y == game.yMax) {
			this.y = 0;
		}
	}
}
