import LinkedList from "./main.js"
// const LinkedList = require('./main.js');

const  ll = new LinkedList();
ll.prepend(10);
ll.prepend(20);
ll.prepend(3);
ll.prepend(8);
ll.append(11);



console.log(ll)
ll.printHead()
ll.printTail()
ll.pop()
ll.at(3)
ll.print()
ll.contains(7)
ll.find(50)
ll.insertAt(100, 1)
ll.removeAt(0);
ll.toString()

