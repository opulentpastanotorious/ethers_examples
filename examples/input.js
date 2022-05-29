// const readline = require("readline");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Where do you live? ", function (answer) {
  console.log(`Oh, so you live in ${answer}`);
  console.log("Interface Closed");
  readline.close();
});


readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});