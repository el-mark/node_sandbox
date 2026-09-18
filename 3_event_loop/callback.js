import fs from "fs";

// as raw bytes 
// fs.readFile("./file.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});