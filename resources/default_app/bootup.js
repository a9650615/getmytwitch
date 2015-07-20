var app = require('app');
var Menu = require('menu');
var MenuItem = require('menu-item');
var BrowserWindow = require('browser-window');
// 網路判斷
var ipc = require('ipc');
//var gulp = require('gulp');

// Report crashes to our server.
require('crash-reporter').start();

var mainWindow = null;

var app = require('app');
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: '測試功能',
    description: '功能測試中'
  }
]);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

// 網路狀態改變
ipc.on('online-status-changed', function(event, status) {
  //console.log(status);
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'min-width': 800,
    'min-height': 600,
    'auto-hide-menu-bar': true,
    'use-content-size': true,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.setProgressBar(0);
  mainWindow.focus();
});
