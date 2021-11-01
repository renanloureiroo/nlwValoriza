import { Router } from "express"

import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

import { ensureAdmin } from "./Middlewares/ensureAdmin"
import { ensureAuthenticated } from "./Middlewares/ensuereAuthenticated"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController"

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController()

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post(
  "/compliment",
  ensureAuthenticated,
  createComplimentController.handle
)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)

router.get(
  "/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
)
export { router }
