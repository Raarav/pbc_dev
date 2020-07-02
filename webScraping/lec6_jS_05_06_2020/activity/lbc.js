let request = require("request");
let fs = require("fs");
console.log("Sending Request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results"

// cb will be called when request recieves the data

// request(url, cb);
// function cb(err, response, html) {
//     console.log("Recieved Response");
//     if (err == null && response.statusCode == 200) {
//         fs.writeFileSync("index.html", html);
//         console.log("File Saved");
//         parseHtml(html);
//     } else if (response.statusCode == 404) {
//         console.log("Page not found");
//     } else {
//         console.log(err);
//         console.log(response.statusCode);
//     }
// }
// function  parseHtml(html) {
//     console.log("Parsing Html");
//     let $ = cheerio.load(html);
//     let title = $('h5.header-title.label');
//     console.log("''''''''''''''''''''''''''''");
//     console.log(title.text());
//     console.log("'''''''''''''''''''''''''''''");    
// }

///? last ball comentry

let url1 = "https://www.espncricinfo.com/series/19322/commentary/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20"
// cb will be called when request recieves the data
request(url1, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("index.html", html);
        console.log("File Saved");
        parseHtml1(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}

function parseHtml1(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    // bring all the selected elements
    let element = $('.match-comment-wrapper');
    // let ans = element.text();
    // console.log(ans);
    // ans = $('.match-comment-wrapper').text();
    // console.log('ans');

    // print html of first element
    // console.log(element.text());


    console.log("''''''''''''''''''''''''''''");
    console.log($(element[0]).text());
    console.log("'''''''''''''''''''''''''''''");   
}

//??? get heighest wekict taker

