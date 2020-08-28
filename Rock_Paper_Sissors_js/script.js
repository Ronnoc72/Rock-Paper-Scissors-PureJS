var pick = false;
var play_clicked = false;
var scissors_choice = false;
var rock_choice = false;
var paper_choice = false;
var rock_oponent = false;
var paper_oponent = false;
var scissors_oponent = false;

function rock() {
	if (pick) {
		return;
	}
	var p = document.createElement("p");
	var node = document.createTextNode("You Picked Rock");
	var div = document.getElementById("images");
	var choiceDiv = document.getElementById("choice");
	p.appendChild(node);
	p.setAttribute("id", "p-id");
	div.classList.add("hide");
	choiceDiv.appendChild(p);
	choiceDiv.classList.add("center-text");
	rock_choice = true;
	pick = true;
}

function paper() {
	if (pick) {
		return;
	}
	var p = document.createElement("p");
	var node = document.createTextNode("You Picked Paper");
	var div = document.getElementById("images");
	var choiceDiv = document.getElementById("choice");
	p.appendChild(node);
	p.setAttribute("id", "p-id");
	div.classList.add("hide");
	choiceDiv.appendChild(p);
	choiceDiv.classList.add("center-text");
	paper_choice = true;
	pick = true;
}

function scissors() {
	if (pick) {
		return;
	}
	var p = document.createElement("p");
	var node = document.createTextNode("You Picked Scissors");
	var div = document.getElementById("images");
	var choiceDiv = document.getElementById("choice");
	p.appendChild(node);
	p.setAttribute("id", "p-id");
	div.classList.add("hide");
	choiceDiv.appendChild(p);
	choiceDiv.classList.add("center-text");
	scissors_choice = true;
	pick = true;
}

function play() {
	if (play_clicked) {
		return;
	}
	var randomVal = Math.ceil(Math.random() * 3);
	if (randomVal == 1) {
		spawnRock();
	} else if (randomVal == 2) {
		spawnPaper();
	} else if (randomVal == 3) {
		spawnScissors();
	}
	var button = document.createElement("button");
	var text = document.createTextNode("Again");
	var mainBody = document.getElementById("main-body");
	button.appendChild(text);
	button.classList.add("play-button");
	button.onclick = function() {again()};
	var div = document.getElementById("buttons");
	div.appendChild(button);
	mainBody.classList.add("show-time");
}

function spawnRock() {
	if (play_clicked) {
		return;
	}
	var rock = document.getElementById("rock");
	rock.classList.add("center-play");
	rock_oponent = true;
	play_clicked = true;
	win();
}

function spawnPaper() {
	if (play_clicked) {
		return;
	}
	var paper = document.getElementById("paper");
	paper.classList.add("center-play");
	paper_oponent = true;
	play_clicked = true;
	win();
}

function spawnScissors() {
	if (play_clicked) {
		return;
	}
	var scissors = document.getElementById("scissors");
	scissors.classList.add("center-play");
	scissors_oponent = true;
	play_clicked = true;
	win();
}

function win(){
	var mainBody = document.getElementById("main-body");
	var winScreen = document.getElementById("winning-screen");
	mainBody.classList.add("hide");
	coolTransition();
}

function coolTransition() {
	var color = 40;
	var body = document.getElementById("real-body");
	body.style.background = "rgb(" + color + ", " + color + ", " + color + ")"
	setTimeout(coolTransition2, 500);
}

function coolTransition2() {
	var color = 120;
	var body = document.getElementById("real-body");
	body.style.background = "rgb(" + color + ", " + color + ", " + color + ")"
	setTimeout(coolTransition3, 500);
}

function coolTransition3() {
	var color = 200;
	var body = document.getElementById("real-body");
	body.style.background = "rgb(" + color + ", " + color + ", " + color + ")"
	setTimeout(reveal, 500);
}

function reveal() {
	var paper = document.getElementById("paper");
	var scissors = document.getElementById("scissors");
	var rock = document.getElementById("rock");
	var button = document.createElement("button");
	var text = document.createTextNode("Again");
	var node = document.createElement("p");
	var winScreen = document.getElementById("winning-screen");
	var color = 255;
	var body = document.getElementById("real-body");
	body.style.background = "rgb(" + color + ", " + color + ", " + color + ")"
	winScreen.classList.remove("hide");
	if (paper_oponent) {
		paper.classList.remove("hide");
		paper.classList.add("size");
	} else if (rock_oponent) {
		rock.classList.remove("hide");
		rock.classList.add("size");
	} else if (scissors_oponent) {
		scissors.classList.remove("hide");
		scissors.classList.add("size");
	}
	
	if (paper_choice && paper_oponent) {
		var nodeText = document.createTextNode("Tie");
		node.appendChild(nodeText);
	} else if (paper_choice && rock_oponent) {
		var nodeText = document.createTextNode("Win");
		node.appendChild(nodeText);
	} else if (paper_choice && scissors_oponent) {
		var nodeText = document.createTextNode("Lose");
		node.appendChild(nodeText);
	} else if (rock_choice && rock_oponent) {
		var nodeText = document.createTextNode("Tie");
		node.appendChild(nodeText);
	} else if (rock_choice && scissors_oponent) {
		var nodeText = document.createTextNode("Win");
		node.appendChild(nodeText);
	} else if (rock_choice && paper_oponent) {
		var nodeText = document.createTextNode("Lose");
		node.appendChild(nodeText);
	} else if (scissors_choice && scissors_oponent) {
		var nodeText = document.createTextNode("Tie");
		node.appendChild(nodeText);
	} else if (scissors_choice && paper_oponent) {
		var nodeText = document.createTextNode("Win");
		node.appendChild(nodeText);
	} else if (scissors_choice && rock_oponent) {
		var nodeText = document.createTextNode("Lose");
		node.appendChild(nodeText);
	}
	node.classList.add("winning-text");
	winScreen.appendChild(node);
	button.appendChild(text);
	button.classList.add("play-button");
	button.onclick = function() {again()};
	winScreen.appendChild(button);
}

function again() {
	location.reload();
}
