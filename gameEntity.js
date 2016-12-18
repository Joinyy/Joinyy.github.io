function gameEntity() {
	this.entitySize = gridSize;
	this.xMax = gameSizeX / gridSize;
	this.yMax = gameSizeY / gridSize;
	this.grid = createArray(this.xMax, this.yMax);
	this.foodCount = 0;
	for (var i = 0; i < this.grid.length; i++) {
		for (var j = 0; j < this.grid[i].length; j++) {
			this.grid[i][j] = "default";
		}
	}

	this.addEntity = function(xGrid, yGrid, type) {
		switch (this.grid[xGrid][yGrid]) {
			case "default":
				this.grid[xGrid][yGrid] = type;
				break;
			case "snake":
				if (type === "snaketail") {
					this.grid[xGrid][yGrid] = type;
				} else {
					return false;
				}
				break;
			case "snaketail":
				if (type === "snake") {
					s.kill();
				} else if (type === "food") {
					return false;
				}
				break;
			case "food":
				if (type === "snake") {
					s.eat();
					this.grid[xGrid][yGrid] = type;
				} else if (type === "food") {
					return false;
				}
			break;
			default:

		}
	}
	this.delEntity = function(xGrid, yGrid) {
		this.grid[xGrid][yGrid] = "default";
	}
	this.clearEntity = function() {
		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				this.grid[i][j] = "default";
			}
		}
	}
	this.draw = function() {
		background(backcolor);
		this.foodCount = 0;
		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				switch (this.grid[i][j]) {
					case "snake":
					case "snaketail":
						fill(fillcolor);
						stroke('rgba(0,255,0,0.25)');
						strokeWeight(1);
						rect(this.transformRect(i), this.transformRect(j), this.entitySize, this.entitySize);
						break;
					case "food":
						this.foodCount = this.foodCount + 1;
						noStroke();
						switch (this.foodCount) {
							case 1:
								fill('rgba(255,20,20,1)');
								break;
							case 2:
								fill('rgba(20,255,20,1)');
								break;
							case 3:
								fill('rgba(20,20,255,1)');
								break;
							default:

						}
						ellipse(this.transformEllipse(i), this.transformEllipse(j), this.entitySize - 4);
						break;
					default:

				}
			}
		}
		displayPoints();
	}

	this.transformRect = function(gridVal) {
		return gridVal * gridSize;
	}
	this.transformEllipse = function(gridVal) {
		return (gridVal * gridSize) + (gridSize / 2);
	}
}
