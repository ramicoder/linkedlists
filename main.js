import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.append(1);
list.append(2);
list.prepend("first");
list.append("last");
console.log(list.toString())
console.log(list.contains("first"))