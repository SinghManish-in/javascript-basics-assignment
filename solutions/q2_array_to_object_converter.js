/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (json,key) => {
	// Write your code here
	var myArray = JSON.parse(json);
	//console.log(myArray[0]);
	console.log(key);
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
module.exports = convert;
