const fs = require("fs");

// Streams are a way to read and write data asynchronously.
// They are also known as "pull" or "asynchronous" streams and "readable" or "writable" streams.

// read stream
// prints buffer binary code
// const readStream = fs.createReadStream("./docs/blog3.txt");

// prints buffer text
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

// read stream
// write stream writes to the file
const writeStream = fs.createWriteStream("./docs/blog4.txt");

//data event listener on this read stream
//getting data by chunks
readStream.on("data", (chunk) => {
  // console.log("---- AINNES NEW CHUNK ----");
  // console.log(chunk);
  writeStream.write("\nNEW CHUNK:\n");
  writeStream.write(chunk);
});

// piping is the same as what we did in the previous example
// readStream.pipe(writeStream);
