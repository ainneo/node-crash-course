const speak = () => {
  console.log("hello, ninjas");
};
speak(); // hello, ninjas

// Global Object
// we get a bunch of objs and methods
// console.log(global); //to run in terminal =>node global

//Lets play with some of the methods
//Time out in 3 seconds and stops the interval function.
setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname); // absolute path to the current directory
console.log(__filename); // absolute path to the current file

// no access to DOM methods
// console.log(document.querySelector);
