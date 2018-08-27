var ipc = require('electron').ipcRenderer;
document.getElementById('tbtn').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-clo');
})
document.getElementById('clo-btn').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-clo');
})
document.getElementById('min-btn').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-min');
})

//弹出侧边栏
