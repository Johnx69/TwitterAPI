import { NextFunction, Request, Response } from 'express-serve-static-core'

export const wrapAsync = (func: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}