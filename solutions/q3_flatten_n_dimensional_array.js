/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
	// Write your code here
	var result = new Array();
	for(var i=0;i<input.length;i++){
		if(input[i] instanceof Array){
			makeArrayFlat(result,input[i]);
		}
		else{
			result.push(input[i]);
		}
	}
	console.log(result);
};

const makeArrayFlat = (result,array) => {
	for(var i=0;i<array.length;i++)
		if(array[i] instanceof Array){
			makeArrayFlat(result,array[i]);
		}
		else{
			result.push(array[i]);
		}
}

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]
*/

flatten([1, [2, 3], [[4], [5]]]);
module.exports = flatten;
