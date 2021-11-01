import { Router } from "express"

import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

import { ensureAdmin } from "./Middlewares/ensureAdmin"
import { ensureAuthenticated } from "./Middlewares/ensuereAuthenticated"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController"
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController copy"

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController()
const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController()
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
// Compliments
router.post(
  "/compliment",
  ensureAuthenticated,
  createComplimentController.handle
)

// Todos Recebidos
router.get(
  "/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
)

// Todos Enviados
router.get(
  "/compliments/sender",
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
)

router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)

export { router }
