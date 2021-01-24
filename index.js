const { app, BrowserWindow,dialog,ipcMain } = require('electron');
const { get } = require('http');
const path = require('path');

const fs = require('fs');
const { electron } = require('process');
if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {
 
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame:false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
    
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
ipcMain.on('openfile',(event,arg)=>{
  if(arg == true){
    getFile();
  }
})
async function getFile(){
  const {filePaths} = await dialog.showOpenDialog({properties:['openFile']});
  let fileContent = fs.readFileSync(filePaths[0],'utf-8');
  console.log(fileContent);
}
