export default class LinkedList{
	constructor(){
    	this.head = null;
        this.length = 0;
    }
  	prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++
    }
    append(value) {
        const newNode = new Node(value, null);
        if (!this.head) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.nextNode) {
            current = current.nextNode;
          }
          current.nextNode = newNode;
          this.length++;
        }
    }
    size(){
        console.log(this.length);
    }
    printHead(){
        console.log(this.head.value);
    }
    printTail(){
        if (!this.head) {
          return null; 
        }
      
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        console.log(current.value);
    }
    at(index) {
      if (index < 0 || index >= this.length) {
        return null; 
      }
  
      let count = 0;
      let current = this.head;
  
      while (current) {
        if (count === index) {
          console.log(current);
        }
        count++;
        current = current.nextNode;
      }
  
      return null;
    }
    pop() {
    if (!this.head) {
      return; // Empty list, nothing to remove
    }

    if (!this.head.nextNode) {
      this.head = null; // Only one node in the list, remove the head
      this.length = 0;  // Update the length of the list
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null; // Remove the reference to the last node
    this.length--; // Update the length of the list
  }
  contains(value){
    let current = this.head;

    while (current){
      if(current.value === value){
        console.log('This list contains the desired value')
        return true;
      }
      current = current.nextNode;
    }
    console.log('This list does not contains the desired value');
    return false;
  }
  find(value){
    let current = this.head;
    let index = 0

    while (current){
      if(current.value === value){
        console.log(index);
        return true;
      }
      current = current.nextNode;
      index++;
    }
    console.log('The desired value is not in the list and therefore does not have an index')
    return false;
  }
  toString() {
    let current = this.head;
    let result = '';

    while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
    }

    result += 'null';
    console.log(result) ;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
        console.error('Invalid index');
        return;
    }

    const newNode = new Node(value);

    if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
    } else {
        let current = this.head;
        let prev = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            prev = current;
            current = current.nextNode;
            currentIndex++;
        }

        prev.nextNode = newNode;
        newNode.nextNode = current;
    }
}
removeAt(index) {
  if (index < 0 || index > this.length) {
      console.error('Invalid index');
      return;
  }

  if (index === 0) {
      this.head = this.head.nextNode;
  } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;

      while (currentIndex < index) {
          prev = current;
          current = current.nextNode;
          currentIndex++;
      }

      prev.nextNode = current.nextNode;
  }
}
  print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.nextNode;
      }
    }
}

class Node{
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}