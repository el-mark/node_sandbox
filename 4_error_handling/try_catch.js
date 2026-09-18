try {
  const data = await fetchThing();
} catch (err) {
  console.log('Failed to fetch', err.message);
}