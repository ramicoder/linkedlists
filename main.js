import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.removeAt(1);
console.log(list.toString());