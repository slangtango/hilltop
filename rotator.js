 // How to create the image gallery rotator


// 1. Load a set of images into the page -- HTML
// 1.2 Standardize image sizes - CSS
// 1.3 display the first image with a caption  -- CSS
// 1.4 store all images in a JS array
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Images/sauces.jpg';
imgArray[0].caption = "Our barbecue sauces have won Best of Louisville two years in a row!"

imgArray[1] = new Image();
imgArray[1].src = 'Images/chickenwaffles.jpg';
imgArray[1].caption = "Chicken and waffles with the bourbon caramel sauce are always a favorite"

imgArray[2] = new Image();
imgArray[2].src = 'Images/wings.jpg';
imgArray[2].caption = "Our wings are huge"

imgArray[3] = new Image();
imgArray[3].src = 'Images/games.jpg';
imgArray[3].caption = "We have loads of games to play, as well as a foosball table and two arcade machines"

imgArray[4] = new Image();
imgArray[4].src = 'Images/crowdwall.jpg';
imgArray[4].caption = "We can't wait to see you!"



//1.5 attach a JS variable to the DOM image object
var displayedImage = document.getElementById("displayed_Image");
var displayedCaption = document.getElementById("caption");

//display the first image and caption
displayedImage.src = imgArray[0].src;
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
	displayedCaption.innerHTML = imgArray[index].caption;
};

// 3. Create two arrows for forward and back - HTML
// 4. capture clicks to those elements - JS
// 7. add this code to the hilltop.js file



