/* memory.js
 * description: This is the external JavaScript file for my HTML5 memory game.
 *
 * author: Heath Carroll
 * email: Heath@RoguishExploits.com
 */
 
// global variables
var imageArray = new Array();
var startArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
var numArray = new Array();
var randomNum = 0;

/* Creates a randomized 16 element array of numbers from the startArray. This
 * is needed to allow for a dynamic and random placement of the cards. 
 * usage: called by init() only, requires startArray to be initialized. */
function randomizeArray() {
	for(var i = 0; i < 16; i++) {
		// choose one of the remaining elements in the startArray. The (16-i)
		// below is to correct for the removed elements. Since we take one from 
		// the startArray every iteration, this works out.
		randomNum = Math.floor(Math.random()*(16 - i));
		
		// splice returns an array of size number of elements spliced out. Since
		// we just want to pull one card, we splice(X, 1). It still returns an array
		numArray[i] = startArray.splice(randomNum, 1)[0]; 
	}
}

/* Sets up the game board and assigns cards their index values.
 * usage: called by body.onload() only. */
function init() {
	randomizeArray();
	
	for(var i = 0; i < 16; i++) {
		// create our images and assign them random png src files.
		imageArray[i] = new Image();
		imageArray[i].src = "./img/" + numArray[i] + ".png";
		
		// assign the randomly chosen images to the 16 canvas elements
		var canvas = document.getElementById("c" + (i+1));
		canvas.setAttribute("data-index", numArray[i]);
		var context = canvas.getContext('2d');
		
		context.drawImage(imageArray[i], 0, 0);
	}
}

/* Restarts the game by navigating back to the pages first iteration in 
 * history. 
 * usage: called by flip(<td>) after the last match is made. */
function reset() {
	/*for(var i = 1; i <= 16; i++) {
		flipCard(document.getElementById("c"+i).parentNode.parentNode, "false");
	}
	startArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	numArray = new Array();
	matchCount = 0;
	init();*/
	history.go(0);
}

/* Flips a specific cell over, and sets its status as 'flipped' or 'not flipped'.
 * usage: called by flip(<td>) every time a face down card is clicked.*/
function flipCard(cell, isFlipped) {
	var yAngle = parseInt(cell.getAttribute("data-yAngle"));
	yAngle += 180;
	cell.setAttribute("data-yAngle", yAngle);
	cell.setAttribute("data-isFlipped", isFlipped);
	cell.style.webkitTransform = "rotateY("+yAngle+"deg)";
}

// some persistant globals specifically used in the flip(<td>) function
var isFirstCard = true;
var firstCardIndex = 0;
var firstCard;
var matchCount = 0;

/* Carries out the users turn. Performs all major game logic.
 * usage: cslled by any onclick event of a <td> on the #board */
function flip(cell) {
	// Only perform card flipping logic if a face down card is clicked
	if(cell.getAttribute("data-isFlipped") != "true") {
		// turn over the first card of an attempted match
		if(isFirstCard) {
			flipCard(cell, "true");
			firstCard = cell;
			firstCardIndex = firstCard.childNodes[0].childNodes[0].getAttribute("data-index");
			isFirstCard = false;
		}
		// turn over the second card of an attempted match
		else {
			flipCard(cell, "true");
			// use the cards' index variables to check for a match
			if(firstCardIndex == cell.childNodes[0].childNodes[0].getAttribute("data-index")) {
				//alert("MATCH!");
				matchCount += 1;
			}
			// not a match so reset those cards after informing the player
			else {
				alert("no match...");
				flipCard(firstCard, "false");
				flipCard(cell, "false");
			}
			isFirstCard = true; // either way, start the next pair matching attempt
		}
	}
	// check to see if that was the last match...
	if(matchCount == 8) {
		alert("YOU WON!!!");
		if(confirm("Would you like to play again?")) reset();
	}
}