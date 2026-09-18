import express from 'express'
const app = express()
app.use(express.json());

app.get('/user/:id', (req, res) => {
  console.log('loading response')
  res.json({ id: req.params.id })
})

app.listen(3000);