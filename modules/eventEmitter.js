// import the eventemitter class from node.js
// gets the eventemitter tools from node.js
import { EventEmitter } from 'events';

// create one event emitter that the whole app will share
// this create an instance, like a notification or alert
const appEvent = new EventEmitter();

// export it so other modules can used it
// shares the event emitter with other files
export default appEvent;