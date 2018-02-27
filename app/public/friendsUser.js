


$(document).ready(function() {



$('#submit').on("click", function(event){


	event.preventDefault();


	if(	$('#name').val() == ""){

			alert("Please enter your name");
			return;


	} else if ($('#species').val() == ""){

			alert("Please enter the name of your species");
			return;


	// } else if ($('#planet').val() == ""){

	// 		alert("Please enter the name of your home planet");
	// 		return;


	// } 
	// else if ($('#gender').val() == ""){ 

	// 		alert("Please enter your gender");
	// 		return;

	// } else if ($('#age').val() == ""){

	// 		alert("Please enter your age, converted to Earth years");
	// 		return;

	} else {

		var scores = [];

	for (var i = 1 ; i < 11; i++){


		scores.push(parseInt($('#q'+i).val().substring(0,1)));


	}}; //end of for loop

	

var newUser = {

name: $('#name').val().trim(),
species: $('#species').val().trim(),
// planet: $('#planet').val().trim(),
// gender: $('#gender').val().trim(),
// age: $('#age').val().trim(),
scores: scores

};

	$("#name").val("");
	$('#species').val("");
	// $('#planet').val("");
	// $('#gender').val("");
	// $('#age').val("");

console.log("new user");
console.log(newUser);


$.post('/api/friends', newUser, function(res) {

	console.log("res");
	console.log(res);
	// console.log(res.name);
	// console.log(res.scores);

	// res.match();

	$('#bestieModalLabel').text("Your Alien Friend Match is " +res.name);
	$("#bestieImg").attr("src", res.photo);
	$("#bestieText").text("Congrats " + newUser.name + ", your outlook on life tells us you will get on brilliantly with this excellent "
	    + res.species + ", "+ res.name + ". " + res.name + " enjoys hanging out with " + newUser.species+"s. You intergalacgtic rock stars are going to shred!");

	$('#bestieModal').modal('show');
	return;


        });



		}); //end of submit
// return;  //so that when the modal is closed we can run it all again!!!

});// end of doc ready
