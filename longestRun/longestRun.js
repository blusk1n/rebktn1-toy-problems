/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var arr = string.split("")
    var obj = {};
    if(string === ""){
        return [0,0]
    } 
    for(var i =0 ; i<arr.length;i++){
        let counter = arr[i-1];
        if(obj[arr[i]] && arr[i]===counter){
            obj[arr[i]]++
        }
        else{
            obj[arr[i]]=1
        }
    }
    var result = [];
    for (var key in obj){ 
        if(obj[key]>1){
            result.push(key)
        }
        result.sort((a,b)=>{return obj[b]-obj[a]})    
    }
    if(result.length === 0){
        return [0,0]
    }
    return [string.indexOf(result[0]),string.indexOf(result[0])-1+obj[result[0]]]
}
