import { Request, Response, NextFunction } from 'express'

import yup from '../../../app/config/yup'

export const ValidateUserPayload = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      name: yup.string().min(5).required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required()
    })
    .validate(request.body, { abortEarly: false })

  return next()
}
