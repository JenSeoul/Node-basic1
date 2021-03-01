const Logger = require('./logger');


const logger1 = new Logger();
logger1.on('message', (data)=> console.log('Called Listener',data));

logger1.log('Hello World');
logger1.log('Hi');
logger1.log('Hello World');