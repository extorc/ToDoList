function open_file_menu(){
    let hidden = true;
    var fileMenu = [get('file_menu'),get('file_menu2'),get('file_menu3')];
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
function get(el){
    return document.getElementById(el);
}
function openFS(){
    ipc.send('asynchronous-message', 'ping')
    ipc.on('asynchronous-message',(event,fileInfo)=>{
        openedFile = fileInfo[1];
        document.getElementById('fileText').value = fileInfo[0];
        document.getElementById('fileName').innerText = openedFile;
    })
}
function saveFile(){
    code = document.getElementById('fileText').value;
    ipc.send('saveFile',code)
}