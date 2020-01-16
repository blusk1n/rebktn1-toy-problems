// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var Arrayception =(arr)=>{
    if(arr.join("")=== "")return 0
    let obj = {}
    for(elm of arr){
        if(elm.join("")!=="")obj[JSON.stringify(elm)]=0
    }
  
    for(key in obj){
        for( i=0 ; i<key.length ; i++){
            if(key[i]==="["){
                obj[key]++
            }
        }
    }
    let count = 1 
    for(key in obj){
        if(obj[key]>count){
            count = obj[key]
        }
    }
    return count+1
}