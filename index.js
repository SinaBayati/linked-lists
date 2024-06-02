import { LinkedList } from './modules/linkedList.js';

let L = new LinkedList();
L.append("first element");
L.append("second element");
L.append("third element");
console.log("HEAD:",L.head);
console.log("SN:",L.head.nextNode);
console.log("TAIL:",L.tail);
console.log("SIZE:",L.size);
