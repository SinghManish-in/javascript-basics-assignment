// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [{name: 'orange', color: 'orange', pricePerKg: "120"},
{name: 'mango', color: 'green', pricePerKg: "250"},
{name: 'apple', color: 'red', pricePerKg: "200"}]

const buildMap = () => {
    var fruitsMap = new Map();
    for(var i=0;i<fruits.length;i++)
        fruitsMap.set(fruits[i].name,fruits[i]);
    console.log(fruitsMap.get('orange'));
    console.log(fruitsMap.get('mango'));
    console.log(fruitsMap.get('apple'));
}

buildMap();