import { Request, Response } from "express"
import { Compliments } from "../entities/Compliments"
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService"

class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const complimentsSenderService = new ListUserSenderComplimentsService()

    const complimentsSender = await complimentsSenderService.execute(user_id)

    return response.json({
      compliments: complimentsSender,
    })
  }
}

export { ListUserSenderComplimentsController }
