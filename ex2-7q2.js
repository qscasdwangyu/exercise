// 2-7 Q2. Write an "object literal" that implements the 
// "queue" data structure. Use the following template to 
// write your solution.

let q = {
  // data properties to hold the content of the queue
  content: [],

  enqueue(elem) {
    // add 'elem' at the end of queue
    // your work here
  },
  dequeue() {
    // remove the element at the head of queue, and return the element
    // your work here
  },
  count() {
    // returns the number of elements in the queue
    // your work here
  },
  toString() {
    // return the content of the queue as string
    // your work here
  }
};

q.enqueue('a'); q.enqueue('b'); q.enqueue('c');
console.log(q.dequeue()); // prints 'a'
console.log(q.count());   // prints 2
q.enqueue('d');
console.log(`The queue contains ${q}.`);
