import { LinkedList } from './modules/linkedList.js';

let L = new LinkedList();
L.prepend("first element");
L.prepend("second element");
L.prepend("third element");
console.log("HEAD:",L.head);
console.log("FirstNode:",L.head.nextNode);
console.log("TAIL:",L.tail);
console.log("SIZE:",L.size);
