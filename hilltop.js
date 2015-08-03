//Hilltop Website Javascript Files

//Problem: make the navigation elements respond to clicks and display different content in content-left.

//Steps
//1. attach click handler to nav elements

$('#foodmenu-nav').click(function() {
	console.log('clicked for food')
	//2. select the right content and toggle on off
	$('#foodmenu').show()
	//3. hide previous content
	$('#default-content').hide()
	$('#boozemenu').hide()
	$('#gallery').hide()
});

$('#boozemenu-nav').click(function() {
	console.log('clicked for drinks')
	//2. select the right content and display
	$('#boozemenu').show()
	//3. hide previous content
	$('#default-content').hide()
	$('#foodmenu').hide()
	$('#gallery').hide()
});

$('#gallery-nav').click(function() {
	console.log('clicked for gallery')
	//2. select the right content and display
	$('#gallery').show()
	//3. hide previous content
	$('#default-content').hide()
	$('#foodmenu').hide()
	$('#boozemenu').hide()
});

$('#hours-nav').click(function() {
	console.log('clicked for gallery')
	//2. select the right content and display
	$('#default-content').show()
	//3. hide previous content
	$('#gallery').hide()
	$('#foodmenu').hide()
	$('#boozemenu').hide()
});


