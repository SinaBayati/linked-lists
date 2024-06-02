import { Node } from './nodeObj.js';

export class LinkedList{
  constructor(){
    this.head = new Node(null,null);
    this.size = 0;
    this.tail = null;
  }

  append(value){
    const newNode = new Node(value,null);
    if (this.size === 0) {
      this.head.nextNode = newNode;
    } else {
      this.tail.nextNode = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  prepend(value){
    let newNode = null;
    if (this.size === 0) {
      newNode = new Node(value,null);
      this.head.nextNode = newNode;
      this.tail = newNode;
    } else {
      newNode = new Node(value,this.head.nextNode);
      this.head.nextNode = newNode;
    }
    this.size += 1;
  }

  at(index){
    let target = this.head;

    // here we are adding 1 to the index so that we
    // don't count the head node as the first node
    for (let i = 0; i < index + 1; i++){
      target = target.nextNode;
    }

    return target;
  }

  pop(){
    const secondToLastItemIndex = this.size - 2;
    const newLastItem = this.at(secondToLastItemIndex);
    newLastItem.nextNode = null;
    this.tail = newLastItem;
    this.size -= 1;
  }

  contains(value){
    for(let i = 0; i < this.size; i++){
      if(this.at(i).value === value) return true;
    }
    return false;
  }

  find(value){
    for(let i = 0; i < this.size; i++){
      if(this.at(i).value === value) return i;
    }
    return null;
  }

  toString(){
    let resultString = "";
    for(let i = 0; i < this.size; i++){
      resultString += `( ${this.at(i).value} ) -> `;
    }
    return resultString + "null";
  }
}
