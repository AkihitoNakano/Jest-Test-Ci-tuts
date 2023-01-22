import express, { Router } from 'express'
import userRoutes from './routers/user'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/user', userRoutes)

export default app
