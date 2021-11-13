// const people = require("./people");
// console.log(people); //get undefined we need to export the module in the peoples.js file

// const data = require('./people');
// console.log(data.people, data.ages);

//required the peoples file
const { people, ages } = require("./people");
console.log(people, ages); //run node modules.js

//built in node.js modules
const os = require("os");
console.log(os.platform(), os.homedir());
