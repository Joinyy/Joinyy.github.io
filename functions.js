function generateFood() {
	var x = floor(random(0, game.xMax - 1));
	var y = floor(random(0, game.yMax - 1));
	var retval = false;
	do {
		retval = game.addEntity(x, y, "food");
		x = floor(random(0, game.xMax - 1));
		y = floor(random(0, game.yMax - 1));
	} while (retval === false);
}

function lostFocus() {
	var str;
	if (focus === true) {
	  focus = false;
		stroke('rgba(255,255,255,0.25)');
		fill('rgba(128,255,128,0.25)');
		strokeWeight(2);
	  rect(20 , gameSizeY / 2 - 30, gameSizeX - 40, 60);
	  str = "Paused";
	  textAlign(CENTER);
	  textSize(25);
	  textFont("Verdana");
		fill('rgba(80,100,200,1)');
	  text(str, gameSizeX / 2, gameSizeY / 2 + 7);
	}
}

function wonFocus() {
  focus = true;
	background(backcolor);
	game.draw();
}

function displayPoints() {
  var str = nfs(points);
  textAlign(LEFT);
	stroke('rgba(255,255,255,0.25)');
	fill('rgba(128,255,128,0.75)');
	strokeWeight(2);
  textSize(15);
  textFont("Verdana");
  text("Punkte: " + str, 10, 20);
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
