let input = process.argv.slice(2);
let viewFile = require("./commands/view");
let helpFile = require("./commands/help");
let treefyFile  = require("./commands/treefy");
let untreefyFile = require("./commands/untreefy"); 
// console.log(input);
// node tpp.js view src -t 
//node tpp.js view src -f
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefyfun(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefyfun(process.argv[3], process.argv[4]);
        break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}