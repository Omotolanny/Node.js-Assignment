// import built in http module to create a web server
import http from 'http';

// import our event emitter to log activities
import appEvent from './eventEmitter.js';

// function to create and start the server 
export function startServer(port = 3000){
    const server = http.createServer((req, res) =>{
        // log every request that comes in
        appEvent.emit('serverRequest', `${req.method} ${req.url}`);
        // set response header
        res.writeHead(200, { 'content-Type': 'text/html' });
        // send html response
        res.end(`
            <h1>Computer Control Panel</h1>
            <p>Server is running!</p>
            <p>You requested: ${req.url}<p/>
        `);
    });

// start listening on the port
    server.listen(port, () => {
        appEvent.emit('serverStarted', `Server running on http:localhost:${port}`);
    });
}