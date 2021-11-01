import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token preenchido
  if (!authToken) {
    response.status(401).end()
  }
  console.log(authToken)

  const [, token] = authToken.split(" ")

  // Validar se token é válidos
  try {
    const { sub } = verify(token, process.env.SECRET_KEY) as IPayload
    request.user_id = sub
    return next()
  } catch (err) {
    return response.status(401).end()
  }

  // Recuperar informações do usuário
}
