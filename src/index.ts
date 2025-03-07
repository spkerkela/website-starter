import express from "express"


import path from 'path'
import Home from './views/home'

const port = process.env.PORT || 4444
const host = process.env.HOST || 'localhost'

const app = express()

const staticPath = path.join(__dirname, 'client')
app.use(express.static(staticPath))

app.get('/', async (req, res) => {
  res.send(Home())
})

app.listen(port as number, host, () => (
  console.log(`server started ${host}:${port}`)
))
