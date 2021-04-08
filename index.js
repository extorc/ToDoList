const { app, BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences : {
      nodeIntegration : true,
    },
    frame:false,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
