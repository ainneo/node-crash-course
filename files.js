const fs = require("fs"); // File System: read and write files

// reading files
//takes in a relative path to a file and returns a callback function
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString()); //turns buffer into string to read in the term
});

// console.log('last line');

// writing files
//takes in a relative path to a file and a string and returns a callback function
fs.writeFile("./docs/blog.txt", "hello, world", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello, again", () => {
  console.log("file was written");
});

// directories
// check if the direcotry exists
if (!fs.existsSync("./assets")) {
  //async task that makes directory and fires a callback function
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files
//make sure the file exists before deleting
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
