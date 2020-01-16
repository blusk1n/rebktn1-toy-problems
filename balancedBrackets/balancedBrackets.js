/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
    str= str.split("");
    var tester = "({[]})"
    var arr = [];
    str.forEach(elm=>{
       tester.indexOf(elm) !==-1 && arr.push(elm)
        
    })
    var falsy = [];
    for(var i = 0 ; i<arr.length ; i++){
        if(arr[i]==="("){
            if(arr.indexOf(")",i)!==-1 ){
                falsy.push(true);
                arr.splice(i,1)
                arr.splice(arr.indexOf(")",i),1)
            }
            else{
                falsy.push(false)
            }

            if(arr.indexOf("{",i)!==-1 ){
                falsy.push(true);
                arr.splice(i,1)
                arr.splice(arr.indexOf("}",i),1)
            }
            else{
                falsy.push(false)
            }
            if(arr.indexOf("[",i)!==-1 ){
                falsy.push(true);
                arr.splice(i,1)
                arr.splice(arr.indexOf("]",i),1)
            }
            else{
                falsy.push(false)
            }
        }
    }
    return falsy.indexOf(false) === -1
};
