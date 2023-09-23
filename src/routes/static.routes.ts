import { Router } from 'express'
import {
  serveImageController,
  serveVideoController,
  serveVideoStreamController
} from '~/controllers/medias.controllers'
const staticRouter = Router()

staticRouter.get('/image/:name', serveImageController)
staticRouter.get('/video-stream', serveVideoStreamController)

export default staticRouter
