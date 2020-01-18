/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n) {
    if(n=== 1) return false 
    if(n === 2) return true
    for(i = 2 ; i < n ;i++){
        let strNum = n / i
        if(strNum.toString().split(".").length > 1){
            return true
        }
        return false
    }
}

