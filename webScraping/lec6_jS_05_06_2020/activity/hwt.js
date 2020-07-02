
// find the highest wicket take of the player

let request = require("request");
let fs = require("fs");
console.log("Sending Request");
let cheerio = require("cheerio");
let url2 = "https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20"
request(url2, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("match.html", html);
        console.log("File Saved");
        parseHtml2(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}
function  parseHtml2(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    let players = $(".table.bowler tbody tr");
    // console.log(players.length);
    let maxWikcet = 0;
    let hwt = "";
    for(let i=0;i<players.length;i++)
    {
        // get Name    
        let allColOfAPLayer = $(players[i]).find("td");
        let cPlayerName = $(allColOfAPLayer[0]).text();
        let wickets = $(allColOfAPLayer[4]).text();
        // console.log(playerName + " " + maxWikcet);
        if(Number(wickets)>maxWikcet){
            hwt = cPlayerName;
            maxWikcet = Number(wickets)
        };
        //get wickets
    }    
    console.log(`${hwt} ${maxWikcet}`);
}