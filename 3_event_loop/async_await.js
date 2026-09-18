import fs from 'fs';

async function readIt() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readIt();