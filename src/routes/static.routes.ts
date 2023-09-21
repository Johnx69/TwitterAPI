import { Router } from 'express'
import { serveImageController, serveVideoController, serveVideoStreamController } from '~/controllers/medias.controller'
const staticRouter = Router()

staticRouter.get('/image/:name', serveImageController)
staticRouter.get('/video-stream', serveVideoStreamController)

export default staticRouter
