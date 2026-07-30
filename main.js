import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.append(1);
list.append(2);
list.prepend("first");
list.append("last");
console.log(list.toString());
console.log("size: ", list.size());
console.log("first: ", list.head());
console.log("last: ", list.tail());
console.log(list.at(1));

console.log("popping: ", list.pop());
console.log(list.toString());