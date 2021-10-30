import { Request, Response } from "express"
import { CreateComplimentsService } from "../services/CreateComplimentsService"

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_sender, user_receiver, tag_id, message } = request.body

    const createCompliment = new CreateComplimentsService()

    const compliment = await createCompliment.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }
