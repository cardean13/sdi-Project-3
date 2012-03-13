alert("JavaScript works!");
//json data
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
console.log(json);