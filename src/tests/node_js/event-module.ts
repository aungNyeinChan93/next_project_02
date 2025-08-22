import { EventEmitter } from 'node:events'

const greetEmitter = new EventEmitter();

greetEmitter.on('greet', (name: string): void => console.log(name))

greetEmitter.emit('greet')