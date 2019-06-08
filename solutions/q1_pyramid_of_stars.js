/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (pyramidSize) => {
    // Write your code here
    var pyramid = "";
    for(var i=1;i<pyramidSize+1;i++)
    pyramid = pyramid + getLeadingSpaces(pyramidSize-i)+getStars(i)+"\n";
    console.log(result)
};

const getLeadingSpaces = (pyramidSize) => {
    var leadingSpaces = "";
    for(let i=0;i<pyramidSize;i++)
        leadingSpaces = leadingSpaces + " ";
    return leadingSpaces;
};

const getStars = (pyramidSize) => {
    var stars = "";
    for(let i=0;i<pyramidSize;i++)
    stars = stars + "* ";
    return stars;
};





/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
buildPyramid(41);
module.exports = buildPyramid;
