const {remote} = require('electron');
var win = remote.getCurrentWindow();

setTimeout(blah,1000);

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
hidden = true;
function get(el){
    return document.getElementById(el);
}
function open_file_menu(){
    var fileMenu = [get('file_menu'),get('file_menu2')];
    if (hidden == false){
        for (i = 0;i<fileMenu.length;i++){
            fileMenu[i].style.display = 'none';
            hidden = true;
        }
        
    }
    else{
        for (i = 0;i<fileMenu.length;i++){
            fileMenu[i].style.display = 'block';
            hidden = false;
        }
    }
}
function blah(){
    win.setSize(800,600);
}