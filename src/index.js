const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

// if(process.env.NODE_ENV !== 'production'){
//     require ('electron-reload')(__dirname,{})
// }


let mainWindow
app.on('ready', () => {
    mainWindow =  new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
          },
        width: 1366,
        height: 768,
        title: "soy luisa",
        center: true
    })

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'html/hola.html'),
      protocol: 'file',
      slashes: true,

  }))
})

