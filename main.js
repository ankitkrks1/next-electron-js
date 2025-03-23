import {app, BrowserWindow} from 'electron';
import electronNext from 'electron-next';


app.on('ready',async()=>{
    await electronNext('./src');
    let mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('http://localhost:8000');
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
})