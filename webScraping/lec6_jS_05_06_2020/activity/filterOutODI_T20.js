//filetr out the match team-name and no. of wicket taking

let request = require("request");
let fs = require("fs");
console.log("Sending Request");
let cheerio = require("cheerio");
let url3 = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results"
request(url3, cb);  
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("filterOutODI_T20.html", html);
        console.log("File Saved");
        parseSeriesPage(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}
function  parseSeriesPage(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    console.log("'''''''''''''''''");
    let Allcards = $(".col-md-8.col-16");
    for(let i=0;i<Allcards.length;i++)
    {
        //get Name
        let mtype = $(Allcards[i]).find(".small").text();
        let isValid = mtype.includes("ODI") || mtype.includes("T20I");
        if(isValid){
            // console.log(mtype);
            // attribute selector
            let anchor = $(Allcards[i]).find(".match-cta-container a[data-hover='Scorecard']");
            //to get attribute of an element
            let matchLink = anchor.attr("href");
            // console.log(matchLink);
            let fullLink = `http://www.espncricinfo.com${matchLink}`;
            // console.log(fullLink);
            handleEachMatch(matchLink);
        }
    }    
}

//page Link => request => response => parseMatch
function handleEachMatch(matchLink){
    request(matchLink,cd);
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    console.log("'''''''''''''''''");
    let 
}

//input=> matchPageHtml=> get respective team, run, score of a player