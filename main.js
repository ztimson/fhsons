const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({width: 1000, height: 800, icon: path.join(__dirname, 'assets/img/logo.png')});

  Menu.setApplicationMenu(null);

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'public/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open the DevTools optionally:
  win.webContents.openDevTools();

  win.on('closed', () => (win = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});