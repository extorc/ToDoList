const { app, BrowserWindow,dialog,ipcMain } = require('electron');
const { get } = require('http');
const path = require('path');
const fs = require('fs');
const { electron } = require('process');
let mainWindow
let contents
if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {
 
  mainWindow = new BrowserWindow({
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
ipcMain.on('asynchronous-message',async(event, arg) => {
    const {filePaths} = await dialog.showOpenDialog({properties:['openFile']});
    contents =  fs.readFileSync(filePaths[0],'utf-8')
    mainWindow.webContents.send('asynchronous-message',contents)
})
async function getFile(){
  

}
