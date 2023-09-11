import usersRouter from './routes/users.routes'
import express from 'express'
import databaseService from './services/database.services'
import { NextFunction, Request, Response } from 'express-serve-static-core'
const app = express()
const port = process.env.PORT
// respond with "hello world" when a GET request is made to the homepage
app.use(express.json())
app.use('/users', usersRouter)

databaseService.connect()

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Example running on ${port}`)
})
