import { Request, Response } from "express"
import { CreateComplimentsService } from "../services/CreateComplimentsService"

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_receiver, tag_id, message } = request.body
    const { user_id } = request

    const createCompliment = new CreateComplimentsService()

    const compliment = await createCompliment.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }
