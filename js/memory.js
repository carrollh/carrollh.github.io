var imageArray = new Array();
var startArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
var numArray = new Array();
var randomNum = 0;
function randomizeArray() {
	for(var i = 0; i < 16; i++) {
		randomNum = Math.floor(Math.random()*(16 - i));
		numArray[i] = startArray.splice(randomNum, 1)[0];
	}
}
function init() {
	randomizeArray();
	for(var i = 0; i < 16; i++) {
		imageArray[i] = new Image();
		imageArray[i].src = "./img/" + numArray[i] + ".png";
		
		var canvas = document.getElementById("c" + (i+1));
		canvas.setAttribute("data-index", numArray[i]);
		var context = canvas.getContext('2d');
		
		context.drawImage(imageArray[i], 0, 0);
	}
}
function reset() {
	for(var i = 1; i <= 16; i++) {
		flipCard(document.getElementById("c"+i).parentNode.parentNode, "false");
	}
	startArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	numArray = new Array();
	matchCount = 0;
	init();
}
function flipCard(cell, isFlipped) {
	var yAngle = parseInt(cell.getAttribute("data-yAngle"));
	yAngle += 180;
	cell.setAttribute("data-yAngle", yAngle);
	cell.setAttribute("data-isFlipped", isFlipped);
	cell.style.webkitTransform = "rotateY("+yAngle+"deg)";
}
var isFirstCard = true;
var firstCardIndex = 0;
var firstCard;
var matchCount = 0;
function flip(cell) {
	if(cell.getAttribute("data-isFlipped") != "true") {
		if(isFirstCard) {
			flipCard(cell, "true");
			firstCard = cell;
			firstCardIndex = firstCard.childNodes[0].childNodes[0].getAttribute("data-index");
			isFirstCard = false;
		}
		else {
			flipCard(cell, "true");
			if(firstCardIndex == cell.childNodes[0].childNodes[0].getAttribute("data-index")) {
				//alert("MATCH!");
				matchCount += 1;
			}
			else {
				alert("no match...");
				flipCard(firstCard, "false");
				flipCard(cell, "false");
			}
			isFirstCard = true;
		}
	}
	
	if(matchCount == 8) {
		alert("YOU WON!!!");
		if(confirm("Would you like to play again?")) reset();
	}
}