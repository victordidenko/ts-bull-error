import * as path from 'path';
import * as Queue from 'bull';

console.log(`I'm working`);

// this file extension
const ext = path.extname(__filename);

console.log(`Create bull queue`);
var queue = new Queue('ts queue');
queue.process(__dirname + '/processor' + ext);

console.log(`Add job to bull queue`);
queue.add({ text: 'hello, world!' });
