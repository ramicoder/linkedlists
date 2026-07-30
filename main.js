import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.append(1);
list.append(2);
list.prepend(5);
console.log(list.toString());
console.log(list.size());
console.log(list.head());