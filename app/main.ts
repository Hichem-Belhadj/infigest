import {app, BrowserWindow, Menu, screen, Tray} from 'electron';
import * as path from 'path';
import * as fs from 'fs';

let win: BrowserWindow | null = null;
let tray;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

function createWindow(): BrowserWindow {

  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve),
      contextIsolation: false,
    },
  });

  if (serve) {
    import('electron-debug').then(debug => {
      debug.default({isEnabled: true, showDevTools: true});
    });

    require('electron-reloader')(module, {ignore: ['./src/assets|[/\\]\./']});
    win.loadURL('http://localhost:4200');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/infigest/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/infigest/index.html';
    }

    const fullPath = path.join(__dirname, pathIndex);
    const url = `file://${path.resolve(fullPath).replace(/\\/g, '/')}`;
    win.loadURL(url).then();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  win.on('close', function (evt) {
    evt.preventDefault();
    win?.hide();
  });

  return win;
}

function createTray() {
  const iconPath = path.join(__dirname, '../src/assets/icons/favicon.256x256.png');

  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {label: 'Afficher l\'application', click: () => win?.show()},
    {type: 'separator'},
    {
      label: 'Quitter l\'application', click: () => {
        app.exit();
      }
    },
  ]);

  tray.setContextMenu(contextMenu);

  tray.setToolTip('Votre application');
  tray.on('click', () => {
    if (win?.isVisible()) {
      win?.hide();
    } else {
      win?.show();
    }
  });
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => {
    setTimeout(() => {
      // db.store({
      //   customer_invoice: 'key',
      //   insurance: 'key',
      //   invoice: 'key',
      //   invoice_rejection: 'key',
      //   nurse: 'key',
      //   patient: 'key',
      //   patient_insurance: 'key',
      //   patient_nurse: 'key'
      // });
      // db.sqlQueryExecution();
      // db.sqlBulkQueryExecution();
      // db.connect();
      createWindow();
      createTray();
    }, 400)

  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icons is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  // backup.getBackupList();

} catch (e) {
  // Catch Error
  // throw e;
}
