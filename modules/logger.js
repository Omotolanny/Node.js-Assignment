// import built in node.js modules
import fs from 'fs';
import path from 'path';

// import custom event emitter
import appEvents from './eventEmitter.js';

// create the path to log file
const logFilepath = path.join('logs', 'server.log');

// function to write a log message
export function log(message){
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] INFO: ${message}\n`;

// append to log file
fs.appendFileSync(logFilepath, logMessage);
console.log(logMessage.trim());
}

// function to log errors
export function error(message){
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${message}\n`;

    fs.appendFileSync(logFilepath, logMessage);
    console.error(logMessage.trim());
}

// listen to events and auto-log them
appEvents.on('fileAccessed', (fileName) => {
    log('File accessed: ${fileName}');
})
appEvents.on('error', (errorMsg) => {
    error(errorMsg);
})

// listen for server events
appEvents.on('serverStarted', (message) => {
    log(message);
});

appEvents.on('serverRequest', (message) => {
    log(message);
});

