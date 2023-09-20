import usersRouter from './routes/users.routes'
import express from 'express'
import databaseService from './services/database.services'
import { NextFunction, Request, Response } from 'express-serve-static-core'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routes'
import { initFolder } from './utils/file'
import { UPLOAD_IMAGE_DIR } from './constants/dir'
import path from 'path'
const app = express()
const port = process.env.PORT
// respond with "hello world" when a GET request is made to the homepage
databaseService.connect()

// Create upload folder
initFolder()

app.use(express.json())
app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use(express.static(path.resolve(UPLOAD_IMAGE_DIR)))
app.use(defaultErrorHandler)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Example running on ${port}`)
})
