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
  }
}

export { CreateComplimentsService }
