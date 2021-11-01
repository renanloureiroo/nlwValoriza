import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    response.status(401).json({
      errorCode: "token.invalid",
    })
  }

  const [, token] = authToken.split(" ")

  try {
    const {} = verify(token)
  } catch (error) {}
}
