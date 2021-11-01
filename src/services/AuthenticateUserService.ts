import { getCustomRepository } from "typeorm"
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateUserService {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    // Verificar se email existe
    const userRepositories = getCustomRepository(UsersRepositories)

    const user = await userRepositories.findOne({ email })

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    // Verificar se senha está correta
    const passwordCorrect = await compare(password, user.password)

    if (!passwordCorrect) {
      throw new Error("Email/Password incorrect")
    }

    // Gerar Token
    const token = sign(
      {
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    )

    return token
  }
}

export { AuthenticateUserService }
