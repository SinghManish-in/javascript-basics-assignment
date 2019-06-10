/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
	// Write your code here

	let flatArray = new Array();
	if(typeof input == 'string')
		flatArray = null;
	else
		for(let i=0;i<input.length;i++){
			if(input[i] instanceof Array){
				makeArrayFlat(flatArray,input[i]);
			}
			else{
				flatArray.push(input[i]);
			}
		}
	return flatArray;
};

const makeArrayFlat = (flatArray,array) => {
	for(let i=0;i<array.length;i++)
		if(array[i] instanceof Array){
			makeArrayFlat(flatArray,array[i]);
		}
		else{
			flatArray.push(array[i]);
		}
}

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]
*/

console.log(flatten('invalid value'));
module.exports = flatten;
