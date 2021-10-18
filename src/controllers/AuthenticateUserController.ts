import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    // if (!email) {
    //   throw new Error("Missing email")
    // }

    // if (!password) {
    //   throw new Error("Missing password")
    // }

    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.execute({ email, password })

    return response.json({ token })
  }
}

export { AuthenticateUserController }
