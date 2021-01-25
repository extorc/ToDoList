const {remote} = require('electron');
const ipc = require('electron').ipcRenderer;

let win = remote.getCurrentWindow();
setTimeout(setSize,1000);

function max(){
    var win = remote.getCurrentWindow();
    
    if(win.isMaximized()){
        win.unmaximize();
        document.getElementById('file').style.right = "744px";
        document.getElementById('about_us').style.right = "664px";
    }else{
        win.maximize();
        document.getElementById('file').style.right = "1314px";
        document.getElementById('about_us').style.right = "1234px";
    }
    
}
function min(){
    var win= remote.getCurrentWindow();
    win.minimize();
}

function uff(){
    var win= remote.getCurrentWindow();
    win.close();
}
function get(el){
    return document.getElementById(el);
}
function setSize(){
    win.setSize(800,600);
}
