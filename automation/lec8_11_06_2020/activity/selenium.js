require("chromedriver");
let swd = require("selenium-webdriver");
let browser  = new swd.Builder();
//tab => tab
let tab = browser.forBrowser("chrome").build();
let tabWillBeOpenedPromise = tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
tabWillBeOpenedPromise
.then(function(){
    //implicit timeout
    let findTimeOutP = tab.manage().setTimeouts(
        {
            implicit:10000
        }
    );
    return findTimeOutP;
})
.then(function(){
    //console.log("How page opened");
    //to finf an element
    let id =tab.findElement(swd.By.css("#input-1"));   
    return id;

}).then(function(idBox){
    let idP = idBox.sendKeys("gukkiharza@enayu.com");
    return idP;            
}).then(function(){
    let password = tab.findElement(swd.By.css("#input-2"));
    return password;    
}).then(function(passwordBox){
    let passwordP = passwordBox.sendKeys("rahul12345");
    return passwordP;    
}).then(function(){
    //got to login page
    let logInBt = tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
    return logInBt;
}).then(function(logbt){
    let loginwillclicked = logbt.click();  
    return loginwillclicked;  
}).then(function(){
    let interviewKit = tab.findElement(swd.By.css("h3[title='Interview Preparation Kit']"));
    return interviewKit;
}).then(function(interviewKitCard){
    let interviewKitP = interviewKitCard.click();
    return interviewKitP;
}).then(function(){
    let warmup = tab.findElement(swd.By.css("a[data-analytics='PlaylistCardItem']"));
    return warmup;
}).then(function(warmupCard){
    let warmupP = warmupCard.click();
    return warmupP;    
})
// .then(function(){
//     let fistQ = tab.findElement(swd.By.css("#contest-challenges-problem"));
//     return fistQ;
// }).then(function(fistCard){
//     let firstP = fistCard.click();
//     return firstP;
// })                              
.then(function(){
    let urlOfQp = tab.getCurrentUrl();
    return urlOfQp; 
}).then(function(){
    let questionWillBeSolvedPromise = questionSolver();
    return questionWillBeSolvedPromise;
}).then(function(){
    console.log("First Quetsion solved");
})
.catch(function(err){
    console.log(err);
});

function questionSolver(){
    return new Promise(function(reslove,reject){
        //logic to csolve a question
        let allCBTnWSP =     (swd.By.css(".challenge-submit-btn"));
        allCBTnWSP.then(function(cBtnArr){
            let cBtnWillBeClickedP = cBtnArr[0].click();
            return cBtnWillBeClickedP;
        }).then(function(){
            reslove();
        }).catch(function(err)
        {
            reject();
        })
    });
}