alert("Stuck in a base-camp");



var zombies = 100,
	johnRational = true
	
;

/* "alpha" - argument: number, argument: object, property: number, property: object, 
method: function, method: procedure, method: accessor, math,  return */
var john = {
	"status": "living",
	"position": "leader of others"
	};
	var protectOthers = function (z){
		var johnLeaves = z - 6,
			total = "John leaves "+ johnLeaves + " zombies alive";
			return total;
};

var totalJohn = protectOthers(100)

/* "bravo" - json data, property: object, property: array, 
nested loop, for loop */
var json = {
	"people": {
		"friends": [
			{
				"name": "Sara",
				"age": 29,
				"role": "support team"
			},
			{
				"name": "JD",
				"age": 26,
				"role": "2nd in command"
			}
		],
		
		"enemies": [
			{
				"name": "John",
				"age": "unknown",
				"role": "leader of the others"
			},
			{
				"name": "Steve",
				"age": "deceased",
				"role": "was 2nd in command"
			}
		]
	}
};

for (var key in json.people) {
	var groups = json.people[key]; 
};

/* conditional-true, argument: string, property: string, 
argument: boolean, property: boolean, local variables, return string*/

var escape = function(d) {
		var smartJohn = d + " John allow me to take the place of " 
						+ json.people.friends[0].name + "?"; 
		var stupidJohn = d +" it feel like we'll all die here?";
		if ( johnRational === true) {
			smartJohn 
			} else {
				stupidJohn }
				
			return smartJohn;
};

var canWe = escape("Does")
;
//conditional-true
console.log(canWe);

// argument: array, proprty:array, while loop, nested conditional
survivors = [
	"John",
	"Jd",
	"Jeff",
	"Sara"		
];

while (zombies > 94) {
	console.log(zombies + " zombies left alive.");
	zombies--;
if ( zombies > 94 ) {
	console.log(survivors[0] + " is going strong")
		} else {
	console.log("He can't keep it up, there's too many!")};
};
		


/* conditional-false, argument: string, property: string, 
argument: boolean, property: boolean, return string*/

var escape = function(d) {
		var smartJohn = d + " John allow me to take the place of " 
						+ json.people.friends[0].name + "?"; 
		var stupidJohn = d +" it feel like we'll all die here?";
		if ( johnRational === false) {
			smartJohn 
			} else {
				stupidJohn }
				
			return stupidJohn;
};

var canWe = escape("Does")
;
//conditional-false
console.log(canWe);

//array
console.log( survivors[0] + " gets over run");


// alpha
console.log(totalJohn);
// bravo
console.log(json);

