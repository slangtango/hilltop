//Hilltop Website Javascript Files

//Problem: make the navigation elements respond to clicks and display different content in content-left.

//Steps
//1. attach click handler to nav elements
//2. select the correct div
//3. toggle div's display quality to on
//4. make sure all other divs are off

//Function runs with .onchange (see html, navmenu select)

var changeMenu = function() {
	//identify user choice
var selector = document.getElementById("menus");
var userChoice = selector.value;
console.log(userChoice);

//select correct div and toggle on
if (userChoice === "foodmenu") {
	var chosenDiv = document.getElementById("foodmenu");
			console.log("Time to display")
			chosenDiv.style.display = 'block';		
	} else if (userChoice === "boozemenu") {
	var chosenDiv = document.getElementById("boozemenu");
			console.log("Time to display")
			chosenDiv.style.display = 'block';		
	};

var defaultDiv = document.getElementById("default-content");
	defaultDiv.style.display = 'none';


};
