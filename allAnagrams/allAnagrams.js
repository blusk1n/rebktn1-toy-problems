/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


  // Your code here.
  //output all the anagrams of the str in an array 
  //extra credit  it should be uniq 
  var possibleAnagrams = function (str) {
    // TODO: your solution here
  
    var length = length || str.length;
    var anagrams = [];
  
    var possibility = function (combo) {
      combo = combo || '';
      
      if (combo.length === length) {
        anagrams.push(combo);
        return;
      }
      
      str.split("").forEach(function(letter) {
        possibility(combo + letter);
      });
    };
  
    possibility();
    anagrams.forEach((elm,i)=>{
      //console.log(elm.indexOf("a"))
      if((elm.indexOf("a") === -1) || (elm.indexOf("b") === -1) && (elm.indexOf("c") === -1)){
        anagrams.splice(i,1)
      }
    })
    return anagrams
    };




