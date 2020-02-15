/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
​
// Helpers
​
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}
var linkedList = new Node(1)
linkedList.next = new Node(2)
linkedList.next.next = new Node(3)
linkedList.next.next.next = new Node(6)
linkedList.next.next.next.next = new Node(8)

function reverseLinkedList(linkedList) {
    var current  = linkedList;
    var prev = null;
    var next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    return prev;
}