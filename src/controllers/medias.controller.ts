import { Request, NextFunction, Response } from 'express'
import path from 'path'
import { USERS_MESSAGES } from '~/constants/messages'
import mediasService from '~/services/medias.services'
import { handleUploadImage } from '~/utils/file'

export const uploadImageController = async (req: Request, res: Response, next: NextFunction) => {
  const url = await mediasService.uploadImage(req)
  return res.json({
    message: USERS_MESSAGES.UPLOAD_SUCCESS,
    result: url
  })
}
