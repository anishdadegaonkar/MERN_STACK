const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let queue = [];

function mainMenu(){
    console.log("************ Main Menu ********************");
    console.log("\n 1.Insert the Element. \n 2.Delete the Element. \n 3.Display the Element.");
}