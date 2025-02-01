import { CanSocket } from './index.js';

let socket = new CanSocket('vcan1');

let task = socket.sendPeriodic(123, Buffer.from('deadbeefdeadbeef', 'hex'));

setTimeout(() => {
  task.stop();
  console.log('stopped');
}, 30000);

setTimeout(() => {
  console.log('starting');
  task.start();
}, 60000)

setTimeout(() => {
  socket.close();
}, 70000);