$(document).ready(function(){
//Variable Section
var animalArray = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle', 'sugar glider', 'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 'pygmy goat', 'chicken', 'duck', 'capybara', 'teacup pig', 'serval', 'salamander', 'frog'];

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
});//End on click animal button

//button-class on click function*******************************
$('body').on('click', '.button-class', function() {
	$('#gif-col').empty();

	var animalData = $(this).attr('data-animal');

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + animalData + '&api_key=dc6zaTOxFJmzC&limit=10&rating=g&rating=pg&rating=pg-13';

    $.ajax({url: queryURL, method: 'GET'})
    	.done(function(response) {

        	var results = response.data;

        	for (var j = 0; j < results.length; j++) {
	            	var gifDiv = $("<div class='animal-item'>");

	            	var rating = results[j].rating;
	            	var p = $('<p>').text('Rating: ' + rating);
	            	var animalDataImage = $('<img>');

                animalDataImage.addClass('gif');
	            	animalDataImage.attr('src', results[j].images.fixed_height_still.url);
	            	animalDataImage.attr('data-still', results[j].images.fixed_height_still.url);
	            	animalDataImage.attr('data-animate', results[j].images.fixed_height.url);
	            	animalDataImage.attr('data-state', 'still');

	            	console.log('animalDataImage: ', animalDataImage.attr('data-state'));

	            	gifDiv.append(p);
	            	gifDiv.append(animalDataImage);

	            	$('#gif-col').prepend(gifDiv);
        	}//End for loop
        });//End .done function
});//End button listner

});//End document.ready

//Pause/Resume Function?
    $('body').on('click', '.gif', function(event) {
      var imgTarget = event.target;
      var img = $(imgTarget);
      console.log(this);
      console.log(event.target);

      var state = img.attr('data-state');
      var animateURL = img.attr('data-animate');
      var stillURL = img.attr('data-still');

      // console.log('click state: ', state);

      if (state === 'still') {
          img.attr('src', animateURL);
          img.attr('data-state', 'animate');
      } else {
          img.attr('src', stillURL);
          img.attr('data-state', 'still');
      }
    });//End Pause/Resume Function