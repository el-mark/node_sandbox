const fs = require('fs');

const readStream = fs.createReadStream('big-file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('Got a chunk:', chunk.length, 'bytes');
});

readStream.on('end', () => {
  console.log('Done reading');
});

readStream.on('error', (err) => {
  console.error('Something went wrong:', err);
});