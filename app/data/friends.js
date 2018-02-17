var compareArr = [];

var friendsArr = [

{
	name: "Krebux",
	species: "Dalsaleran",
	planet: "Jittania",
	gender: "male",
	age: 55,
	photo: "__dirname/../public/krebux_200x300.jpg",
	scores: [5,2,4,1,3,4,1,5,1,2]
},{
	name: "Guguhl",
	species: "Bloobon",
	planet: "Wixilal",
	gender: "female",
	age: 25,
	photo: "../public/gughul_200x300.jpg",
	scores: [5,2,2,3,5,3,2,5,5,5]
},{
	name: "Troemmed",
	species: "Duggeriak",
	planet: "Aotia 4",
	gender: "non-binary",
	age: 803,
	photo: "../public/troemmed_200x300.jpg",
	scores: [4,4,3,1,2,3,5,5,3,4]
},{
	name: "Gaz Mabbutt",
	species: "Uekedhoo",
	planet: "Corris",
	gender: "male",
	age: 41,
	photo: "../public/gary_mabbutt_200x300.jpg",
	scores: [5,4,5,2,3,1,1,2,2,4]
},{
	name: "Zearyhs",
	species: "Crazan",
	planet: "Hetoo Prime",
	gender: "female",
	age: 18,
	photo: "../public/zearhy_200x300.jpg",
	scores: [4,1,2,3,5,4,2,5,4,5]
},{
	name: "Jout'elz",
	species: "Gozima",
	planet: "Sa'hav Oculo",
	gender: "non-binary",
	age: 1800,
	photo: "../public/jout'elz_200x300.png",
	scores: [3,4,4,5,3,2,1,1,5,4]
},{
	name: "Gusteho",
	species: "Tuuan",
	planet: "Loriak",
	gender: "male",
	age: 21,
	photo: "../public/gusteho_200x300.jpg",
	scores: [5,5,4,4,4,5,1,4,3,4]
},{
	name: "Phalnugh",
	species: "Nanalon",
	planet: "Nirisia",
	gender: "female",
	age: 36,
	photo: "../public/phalnugh_200x300.jpg",
	scores: [1,2,3,4,4,2,1,4,5,5]
},{
	name: "Karry Hane",
	species: "Taulian",
	planet: "Araimisia",
	gender: "male",
	age: 24,
	photo: "../public/harry_kane_200x300.jpg",
	scores: [4,1,2,5,2,5,5,4,5,1]
},{
	name: "Stucussa",
	species: "Ardi",
	planet: "Aquilae VIII",
	gender: "female",
	age: 23,
	photo: "../public/stucussa_200x300.png",
	scores: [1,4,5,4,5,4,5,1,5,4]
},{
	name: "Allan",
	species: "Unopan",
	planet: "Talescria",
	gender: "male",
	age: 31,
	photo: "../public/Allan_the_Alien_200x300.jpg",
	scores: [3,1,3,2,3,5,4,2,2,4]
},{
	name: "Nolan",
	species: "Viltrumite",
	planet: "Viltrum",
	gender: "male",
	age: 3106,
	photo: "../public/Nolan-Grayson_200x300.jpg",
	scores: [1,4,3,2,4,2,3,1,5,5]
},{
	name: "Andressa",
	species: "Thraxan",
	planet: "Thraxa",
	gender: "female",
	age: 27,
	photo: "../public/andress_200x300.jpg",
	scores: [3,3,4,2,5,1,3,4,3,3]
},{
	name: "Marko",
	species: "Wreathian",
	planet: "Wreath",
	gender: "male",
	age: 32,
	photo: "../public/marko_200x300.jpg",
	scores: [2,3,2,5,5,3,1,5,2,5]
},{
	name: "Alana",
	species: "Landfallian",
	planet: "Landfall",
	gender: "female",
	age: 28,
	photo: "../public/alana_200x300.jpg",
	scores: [1,1,4,2,5,2,5,2,4,2]
}
];

var User = function (name, species, planet, gender, age, scores) {

	this.name = name;
	this.species = species;
	this.planet = planet;
	this.gender = gender;
	this.age = age;
	this.scores = scores;
	this.match = function (User) {


		for (var i = 0 ; i < friendsArr.length; i ++) {

			var currentObj = friendsArr[i];
			var totalDiff = 0;

			for (var j = 0; j < this.scores.length; j++){
				

				scoreDiff = Math.abs(this.scores[j] - currentObj.scores[j]);
		

				totalDiff += scoreDiff;
		

			}; //inner for loop

				compareArr.push(totalDiff);
						

		}; //outer for loop

				console.log(compareArr);

				var bestie = friendsArr[compareArr.indexOf(Math.min.apply(null, compareArr))].name; //Math.moin.apply(null, Arr) gives min number in array
				console.log(bestie);


}; //end of match
}; // end User


module.exports =  {

		User: User,
		friendsArr: friendsArr	

	};

