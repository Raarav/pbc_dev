let fs = reqiure("fs");
console.log("Before");
// 2105

let readFilePromise = fs.Promises.readFile("f2.txt");

console.log("After");