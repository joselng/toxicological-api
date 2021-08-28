import { Request, Response, NextFunction } from 'express'

import yup from '../../../app/config/yup'

export const ValidateSamplePayload = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      code: yup.string().length(8).required(),
      cocaine: yup.number().required(),
      amphetamine: yup.number().required(),
      methamphetamine: yup.number().required(),
      mda: yup.number().required(),
      mdma: yup.number().required(),
      thc: yup.number().required(),
      morphine: yup.number().required(),
      codeine: yup.number().required(),
      heroin: yup.number().required(),
      benzoylecgonine: yup.number().required(),
      cocaethylene: yup.number().required(),
      norcocaine: yup.number().required()
    })
    .validate(request.body, { abortEarly: false })

  return next()
}
