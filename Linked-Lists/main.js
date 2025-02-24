import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); 
// Expected Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Additional tests
list.prepend("lion");
console.log(list.toString()); 
// ( lion ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("Size:", list.size()); // 7
console.log("Head:", list.head().value); // lion
console.log("Tail:", list.tail().value); // turtle
console.log("At index 2:", list.at(2).value); // cat

list.pop();
console.log(list.toString()); 
// ( lion ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

console.log("Contains 'parrot':", list.contains("parrot")); // true
console.log("Index of 'hamster':", list.find("hamster")); // 4

list.insertAt("elephant", 3);
console.log(list.toString()); 
// ( lion ) -> ( dog ) -> ( cat ) -> ( elephant ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

list.removeAt(2);
console.log(list.toString()); 
// ( lion ) -> ( dog ) -> ( elephant ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
