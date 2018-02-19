


$(document).ready(function() {




$('#submit').on("click", function(){


	if(	$('#name').val() == ""){

			alert("Please enter your name");


	} else if ($('#species').val() == ""){

			alert("Please enter the name of your species");


	} else if ($('#planet').val() == ""){

			alert("Please enter the name of your home planet");


	} else if ($('#gender').val() == ""){

			alert("Please enter your gender");

	} else if ($('#age').val() == ""){

			alert("Please enter your age, converted to Earth years");

	} else {

	event.preventDefault();
	var scores = [];
		
	var name = $('#name').val().trim();
	var species = $('#species').val().trim();
	var planet = $('#planet').val().trim();
	var gender = $('#gender').val().trim();
	var age = $('#age').val().trim();


	for (var i = 1 ; i < 11; i++){


		scores.push(parseInt($('#q'+i).val().substring(0,1)));



	}} //end of for loop


	console.log(scores);
	console.log(name);
	console.log(species);




		}); //end of submit

})// end of doc ready