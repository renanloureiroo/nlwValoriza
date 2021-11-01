import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

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

  // Validar se token é válidos
  const [, token] = authToken.split(" ")

  const tokenValidated = verify(token, process.env.SECRET_KEY)

  if (!tokenValidated) {
    response.status(401).json({
      error: "Token invalide",
    })
  }
  // Recuperar informações do usuário

  return next()
}
