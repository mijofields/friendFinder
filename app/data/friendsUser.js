
$(document).ready(function() {

var scores = [];


$('#submit').on("click", function(){

app.post("/", function(req, res) {

	var name = $('#name').val().trim();
	var species = $('#species').val().trim();
	var planet = $('#planet').val().trim();
	var gender = $('#gender').val().trim();
	var age = $('#age').val().trim();

	var q1 = $('#q1').val().trim();
	var q2 = $('#q2').val().trim();
	var q3 = $('#q3').val().trim();
	var q4 = $('#q4').val().trim();
	var q5 = $('#q5').val().trim();
	var q6 = $('#q6').val().trim();
	var q7 = $('#q7').val().trim();
	var q8 = $('#q8').val().trim();
	var q9 = $('#q9').val().trim();
	var q10 = $('#q10').val().trim();

	scores.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);


	console.log(scores);
  
});

	









		}); //end of submit

})// end of doc ready