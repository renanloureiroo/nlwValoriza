import { Request, Response, NextFunction } from "express"

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true

  if (!admin) {
    return response.status(401).json("Unauthorized")
  }
  next()
}
