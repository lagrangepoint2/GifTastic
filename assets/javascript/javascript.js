$(document).ready(function(){
//Variable Section
var animalArray = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle', 'sugar glider', 'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 'pygmy goat', 'chicken', 'duck', 'capybara', 'teacup pig', 'serval', 'salamander', 'frog'];

// console.log(animalArray);

makeButtons();

//Function Section++++++++++++++++++++++++++++++++
//makeButtons Function
function makeButtons() {
	$('#button-div').empty();
	
	for (var i = 0; i < animalArray.length; i++) {
        var tempButton = $('<button>');
        tempButton.addClass('btn btn-info button-class');
        tempButton.attr('data-animal', animalArray[i]);
        tempButton.text(animalArray[i]);
        $('#button-div').append(tempButton);
    }

}//End makeButtons function

//On click function to add new animal button
$('#add-animal').on('click', function(event) {
	event.preventDefault();

    var tempAnimal = $('#animal-input').val().trim();
    animalArray.push(tempAnimal);

    makeButtons();

//button-class on click function*******************************
$('.button-class').on('click', function() {
	$('#gif-col').empty();
	var animalData = $(this).attr('data-animal');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + animalData + '&api_key=dc6zaTOxFJmzC&limit=10&rating=g&rating=pg&rating=pg-13';
    $.ajax({url: queryURL, method: 'GET'})
    	.done(function(response) {
        	var results = response.data;
        	for (var j = 0; j < results.length; j++) {
        		// if (results[i].rating !== 'i') {
	            	var gifDiv = $("<div class='animal-item'>");
	            	var rating = results[j].rating;
	            	var p = $('<p>').text('Rating: ' + rating);
	            	var animalDataImage = $('<img>');
	            	animalDataImage.attr('src', results[j].images.fixed_height.url);
	            	var sauce = animalDataImage.attr('src');
	            	console.log('sauce: ', sauce);
	            	var length = animalDataImage.attr('src').length;
	            	console.log('length: ', length);
	            	gifDiv.append(p);
	            	animalDataImage.stop();
	            	gifDiv.append(animalDataImage);

	            	$('#gif-col').prepend(gifDiv);
	            // }
        	}//End for loop
        });//End .done function
});//End button listner**********************************************

});//End on click animal button

//button-class on click function
$('.button-class').on('click', function() {
	// console.log('clicked');
	// console.log('animalArray in .button-class', animalArray);
	$('#gif-col').empty();

	var animalData = $(this).attr('data-animal');

    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + animalData + '&api_key=dc6zaTOxFJmzC&limit=10&rating=g&rating=pg&rating=pg-13';

    $.ajax({url: queryURL, method: 'GET'})
    	.done(function(response) {

        	var results = response.data;

        	// console.log('results: ', results);

        	for (var j = 0; j < results.length; j++) {
        		// if (results[i].rating !== 'i') {
	            	var gifDiv = $("<div class='animal-item'>");

	            	var rating = results[j].rating;

	            	var p = $('<p>').text('Rating: ' + rating);

	            	var animalDataImage = $('<img>');

	            	animalDataImage.attr('src', results[j].images.fixed_height.url);
	            	// console.log('animalDataImage: ', animalDataImage);

	            	var sauce = animalDataImage.attr('src');
	            	// sauce +'_s';
	            	console.log('sauce: ', sauce);

	            	var length = animalDataImage.attr('src').length;
	            	console.log('length: ', length);

	            	gifDiv.append(p);
	            	animalDataImage.stop();
	            	gifDiv.append(animalDataImage);

	            	$('#gif-col').prepend(gifDiv);
	            // }
        	}//End for loop
        });//End .done function
});//End button listner















});//End document.ready

