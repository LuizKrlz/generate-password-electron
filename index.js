const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname);

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        resizable: true,
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
