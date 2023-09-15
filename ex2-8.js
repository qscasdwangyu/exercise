class Circle {
  // your work here
}

let c = new Circle(1, 2, 10);
let a = c.area();
console.log(`The area is ${a}`);
// this calls c.toString()
console.log(`c is ${c}`);
// c is a circle at (1, 2) of radius 10
c.move(-1, 0);
console.log(`c is ${c}`);
// c is a circle at (-1, 0) of radius 10



// check whether the Circle c1 fully contains the Circle c2
function contains(c1, c2) {
  // your work here
}

let c1 = new Circle(0, 0, 10);
let c2 = new Circle(3, 4, 4);
let c3 = new Circle(3, 4, 8);
console.log('c1 contains c2? ', contains(c1, c2));
console.log('c1 contains c3? ', contains(c1, c3));
