const fs = require('fs');

var argsError = function printArgsUsage() {
  console.error("Wrong params");
  console.log("usage: createPage fileName")
}

var isFileNameValid = function validateFileName(fileName) {
  var fileNameRegrex = /^[a-z0-9_.@()-]+$/i;
  var validFilename = fileNameRegrex.test(fileName);
  return validFilename;
}

var numOfargs = process.argv.length - 2;
if (numOfargs <= 0 || numOfargs >= 2) {
  argsError();
} else {
  var fileName = process.argv.slice(2);
  if (isFileNameValid(fileName)) {
    fs.copyFile('cli/defaultPage.html', `src/${fileName}.html`, (err) => {
      if (err) throw err;
      console.log(`${fileName}.html was created in the src directory`);
    });
  } else {
    console.error("invalid file name");
    console.error(`Regex: /^[a-z0-9_.@()-]+$/i`)
    argsError();
  }
}