// import event emitter, log emitter, start the web server
import appEvents from "./modules/eventEmitter.js";
import { log, error } from "./modules/logger.js";
import { startServer } from "./modules/serverHandler.js";

// listening i.e set up a listener(like subscribing)
appEvents.on('fileAccessed', (filename) => {
    console.log('someone accessed: ${filename}');
})

// trigger the event(like uploading a video)
appEvents.emit('fileAccessed', 'test.txt');

// test direct logging
log('Server started');
log('User connected');
error('Something went wrong!');

// test event based logging
appEvents.emit('fileAccessed', 'test.txt');
appEvents.emit('error', 'File not found');

startServer(3001);
