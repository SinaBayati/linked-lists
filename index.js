import { LinkedList } from './modules/linkedList.js';

let L = new LinkedList();
L.append("first element");
L.append("second element");
L.append("third element");
L.append("fourth element");
L.append(3);
L.append(35);
L.append(true);
console.log("HEAD:",L.head);
console.log("FirstNode:",L.head.nextNode);
console.log("TAIL:",L.tail);
console.log("SIZE:",L.size);
console.log(L.contains(3));
console.log(L.find(3));
console.log(L.toString());


