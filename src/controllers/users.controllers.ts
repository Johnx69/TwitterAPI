import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        message: 'Login Success'
      }
    ]
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    console.log(error)
  }
}
