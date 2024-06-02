import { LinkedList } from './modules/linkedList.js';

let L = new LinkedList();
L.append("first element");
L.append("second element");
L.append("third element");
L.append("fourth element");
L.append(3);
console.log("HEAD:",L.head);
console.log("FirstNode:",L.head.nextNode);
console.log("TAIL:",L.tail);
console.log("SIZE:",L.size);
console.log(L.contains(3));


