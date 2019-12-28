/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one
. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/



var evenOccurrence =(arr)=>{
    var storage = {}
    var array =arr.map(elm=>{
        return JSON.stringify(elm)
    })
    console.log(array)
    for(var i = 0 ;i<array.length; i++){
        if(storage.hasOwnProperty(array[i])){
            storage[array[i]]++
        }
        else{
            storage[array[i]]=1
        }
    }
    console.log(storage)
    for(var j=0 ; j<array.length ;j++){
        if(storage[array[j]]%2===0){
            return[JSON.parse(array[j])]
        }
    }
    return null
    
    
}
