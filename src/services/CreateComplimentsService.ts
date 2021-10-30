import { response } from "express"
import { getCustomRepository } from "typeorm"

import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentsRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}
class CreateComplimentsService {
  async execute({
    user_receiver,
    user_sender,
    tag_id,
    message,
  }: IComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UsersRepositories)

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver")
    }

    const userReceiverExist = await userRepositories.findOne(user_receiver)

    if (!userReceiverExist) {
      throw new Error("User Receiver does not exists!")
    }

    const compliment = complimentsRepositories.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentsService }
