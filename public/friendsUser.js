
$(document).ready(function() {



$('#submit').on("click", function(event){


	event.preventDefault();


	if(	$('#name').val() == ""){

			alert("Please enter your name");
			return;


	} else if ($('#species').val() == ""){

			alert("Please enter the name of your species");
			return;



	} else {

		var scores = [];

	for (var i = 1 ; i < 11; i++){


		scores.push(parseInt($('#q'+i).val().substring(0,1)));


	}}; //end of for loop

	

var newUser = {

name: $('#name').val().trim(),
species: $('#species').val().trim(),
scores: scores

};

	$("#name").val("");
	$('#species').val("");



$.post('/api/friends', newUser, function(res) {


	$('#bestieModalLabel').text(`Your Alien Friend Match is ${res.name}`);
	$("#bestieImg").attr("src", res.photo);
	$("#bestieText").text(`Congrats ${newUser.name}, your outlook on life tells us you will get on brilliantly with this excellent
	    ${res.species}, ${res.name}. ${res.name} enjoys hanging out with ${newUser.species}s. You intergalactic rock stars are going to shred!`);

	$('#bestieModal').modal('show');
	return;


        });



		}); //end of submit

});// end of doc ready
