let fs = require("fs");

fs.readFile("ls.js", "utf8", function (err, data) {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

module.exports = fs.readFile;
