import { followValidator, updateMeValidator, verifiedUserValidator } from './../middlewares/users.middlewares'
import { wrapRequestHandler } from './../utils/handlers'
import { Router } from 'express'

import {
  accessTokenValidator,
  loginValidator,
  registerValidator,
  refreshTokenValidator,
  emailVerifyTokenValidator,
  forgotPasswordValidator,
  verifyForgotPasswordTokenValidator,
  resetPasswordValidator
} from '~/middlewares/users.middlewares'
import {
  followController,
  forgotPasswordController,
  getMeController,
  getProfileController,
  loginController,
  logoutController,
  registerController,
  resendVerifyEmailController,
  resetPasswordController,
  updateMeController,
  verifyEmailController,
  verifyForgotPasswordController
} from '~/controllers/users.controllers'
import { filterMiddleware } from '~/middlewares/common.middleware'
import { UpdateMeReqBody } from '~/models/requests/User.requests'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: {name: string, email: string, password: string, confirm_password: string, date_of_birth: ISO8601}
 *
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequestHandler(logoutController))
usersRouter.post('/verify-email', emailVerifyTokenValidator, wrapRequestHandler(verifyEmailController))
usersRouter.post('/resend-verify-email', accessTokenValidator, wrapRequestHandler(resendVerifyEmailController))
usersRouter.post('/forgot-password', forgotPasswordValidator, wrapRequestHandler(forgotPasswordController))
usersRouter.post(
  '/verify-forgot-password',
  verifyForgotPasswordTokenValidator,
  wrapRequestHandler(verifyForgotPasswordController)
)

usersRouter.post('/reset-password', resetPasswordValidator, wrapRequestHandler(resetPasswordController))
usersRouter.get('/me', accessTokenValidator, wrapRequestHandler(getMeController))
usersRouter.patch(
  '/me',
  accessTokenValidator,
  verifiedUserValidator,
  updateMeValidator,
  filterMiddleware(['name', 'date_of_birth', 'bio', 'location', 'website', 'username', 'avatar', 'cover_photo']),
  wrapRequestHandler(updateMeController)
)
usersRouter.get('/:username', wrapRequestHandler(getProfileController))
usersRouter.post(
  '/follow',
  accessTokenValidator,
  verifiedUserValidator,
  followValidator,
  wrapRequestHandler(followController)
)

export default usersRouter
