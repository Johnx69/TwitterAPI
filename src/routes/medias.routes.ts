import { Router } from 'express'
import { uploadingSingleImageController } from '~/controllers/medias.controller'

const mediasRouter = Router()

mediasRouter.post('/upload-image', uploadingSingleImageController)

export default mediasRouter
