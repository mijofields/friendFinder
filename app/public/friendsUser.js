


$(document).ready(function() {




$('#submit').on("click", function(){


	event.preventDefault();


	if(	$('#name').val() == ""){

			alert("Please enter your name");
			return;


	} else if ($('#species').val() == ""){

			alert("Please enter the name of your species");
			return;


	} else if ($('#planet').val() == ""){

			alert("Please enter the name of your home planet");
			return;


	} else if ($('#gender').val() == ""){

			alert("Please enter your gender");
			return;

	} else if ($('#age').val() == ""){

			alert("Please enter your age, converted to Earth years");
			return;

	} else {

		var scores = [];

	for (var i = 1 ; i < 11; i++){


		scores.push(parseInt($('#q'+i).val().substring(0,1)));



	}}; //end of for loop

var newUser = {

name: $('#name').val().trim(),
species: $('#species').val().trim(),
planet: $('#planet').val().trim(),
gender: $('#gender').val().trim(),
age: $('#age').val().trim(),
scores: scores

};

console.log(newUser);

$.post("/survey", newUser, function(newUser) {

    	console.log(newUser);

        });



		}); //end of submit

})// end of doc ready