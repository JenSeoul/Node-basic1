// const EventEmitter = require('events');
// const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        // Send an HTTP request
        console.log(message)
        // Raise an event
        this.emit('loggingoccured', {id:1, data:'http://'})
    }
}
// class Logger extends EventEmitter {
//     log(msg){
//         // Call event
//         this.emit('messsage', { id: uuid.v4(), msg:msg} )
//     }
// }
// module.exports = Logger;
var url = 'http://www.mylogger.io/1239'


module.exports = Logger;