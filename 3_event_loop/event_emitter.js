import { EventEmitter } from 'events';
const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`Hi ${name}`));
emitter.emit('greet', 'Mark');
