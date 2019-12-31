/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(arr){
  for(var i = 0 ; i<arr.length;i++){
      if(arr.indexOf(arr[i]*-1)!==-1){
          return true
      }
  }
  return false
}
