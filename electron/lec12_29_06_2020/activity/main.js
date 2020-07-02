// npm init -y  //? to json package init
// npm install electron --save-dev   //? to install elctron 
// npm install ejs-electron --save-dev //? to install ejs-electron tempate

const electron = require('electron');    
const app = electron.app;
const ejs = require("ejs-electron");

ejs.data({
    'title' : "myExcel",
    'rows' : 100,
    'cols' : 26,
});
function createWindow(){
    //Create the browser window.
    const win = new electron.BrowserWindow({
        width : 800,
        height : 600,
        // to open app in hidden
        show: false,
        webPreferences : {
            nodeIntegration : true
        }
    })  
    win.loadFile('Index.ejs').then(function()
    {
        //to remove default menu
        win.removeMenu();
        //maximize
        win.maximize();
        //unhide app so that user could view it
        win.show();
        // win.webContents.openDevTools();
    }); //? to load index file
}

//package=> app=> desktop => open

app.whenReady().then(createWindow);