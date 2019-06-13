const {app, BrowserWindow} = require('electron')
app.on('ready', ()=>{
  
  const mainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{ 
      // 是否使用node的原生api
      nodeIntegration:true,
    }
  })
  mainWindow.loadFile('index.html')
  const secWindow = new BrowserWindow({
    width:400,
    height:300,
    webPreferences:{ 
      // 是否使用node的原生api
      nodeIntegration:true,
    },
    parent:mainWindow // 依附于mainwindow这个窗口
  })
  secWindow.loadFile('sec.html')
})