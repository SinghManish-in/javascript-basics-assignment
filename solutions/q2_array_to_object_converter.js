/* Write a Program to convert an array of objects to an object
	based on a given key */

const myMap = new Map();
class MyData {
	constructor(key, name) {
		this.key = key;	
	  	this.name = name;
	}
  }

const convert = (json,key) => {
	// Write your code here
	var prop = key;
	for(var i=0;i<json.length;i++)
	{ 	
		myMap.set(String(json[i].id),json[i]);
	}
	console.log(mapToObj(myMap));	
};

const mapToObj = (inputMap) => {
    let obj = {};
    inputMap.forEach(function(value, key){
        obj[key] = value
    });
    return obj;
}

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
module.exports = convert;
