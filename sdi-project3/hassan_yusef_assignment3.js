alert("JavaScript works!");


var zombies = 100

//argument: object, property: object, method: function, method: procedure, method: accessor
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



//json data, property: object, nested loop, for loop
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

console.log(totalJohn);
console.log(json);
