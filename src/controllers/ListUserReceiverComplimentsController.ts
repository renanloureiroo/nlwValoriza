import { Request, Response } from "express"
import { Compliments } from "../entities/Compliments"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService"

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const complimentsReceiverService = new ListUserReceiverComplimentsService()

    const complimentsReceiver = await complimentsReceiverService.execute(
      user_id
    )

    return response.json({
      compliments: complimentsReceiver,
    })
  }
}

export { ListUserReceiverComplimentsController }
