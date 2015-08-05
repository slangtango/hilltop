 // How to create the image gallery rotator


// 1. Load a set of images into the page -- HTML
// 1.2 Standardize image sizes - CSS
// 1.3 display the first image with a caption  -- CSS
// 1.4 store all images in a JS array
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Images/sauces.jpg';
imgArray[0].caption = "Hilltop's barbecue sauces have won Best of Louisville two years in a row!"
imgArray[0].alt = "Picture of barbecue sauce bottles"

imgArray[1] = new Image();
imgArray[1].src = 'Images/chickenwaffles.jpg';
imgArray[1].caption = "Chicken and waffles with our bourbon caramel sauce!"
imgArray[1].alt = "Picture of a plate of chicken and waffles"

imgArray[2] = new Image();
imgArray[2].src = 'Images/wings.jpg';
imgArray[2].caption = "Our full-size wings never leave you hungry!"
imgArray[2].alt = "Picture of a plate of chicken wings"

imgArray[3] = new Image();
imgArray[3].src = 'Images/games.jpg';
imgArray[3].caption = "We have loads of games to play, as well as a foosball table and two arcade machines."
imgArray[3].alt = "Picture of stack of board games"

imgArray[4] = new Image();
imgArray[4].src = 'Images/crowdwall.jpg';
imgArray[4].caption = "We can't wait to see you!"
imgArray[4].alt = "Picture of restaurant staff waving"


//1.5 attach a JS variable to the DOM image object
var displayedImage = document.getElementById("displayed_Image");
var displayedCaption = document.getElementById("caption");

//display the first image and caption
displayedImage.src = imgArray[0].src;
displayedImage.alt = imgArray[0].alt;
displayedCaption.innerHTML = imgArray[0].caption;
var index = 0;

//add the click listener so we know when the user clicks on the rotator
displayedImage.addEventListener("click", rotateImage)

function rotateImage() {
	console.log("Rotating image...")

	//check to see if we are at the end of the array and go back to start if we are
	if ((index + 1) === imgArray.length) {
		index = 0;
	} else {
		index += 1;
	};
	displayedImage.src = imgArray[index].src;
	displayedImage.alt = imgArray[index].alt;
	displayedCaption.innerHTML = imgArray[index].caption;
};




