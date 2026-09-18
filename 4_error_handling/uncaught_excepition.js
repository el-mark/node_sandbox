process.on('uncaughtException', err => {
  console.log('Fatal', err);
  process.exit(1);
})

const data = await fetchThing();