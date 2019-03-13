/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var countTriangles = 0;

  for (var i = 0; i < preferences.length; i++) {
    if (i+1 === preferences[preferences[preferences[i]-1]-1]){
      countTriangles++;
    }
  }
  
  return Math.trunc(countTriangles/3);
}