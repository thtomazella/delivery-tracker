import { Router } from "express";
import { SessionsController } from "@/controllers/sessions-controller";

const sessionsRouters = Router()
const sessionsController = new SessionsController()

sessionsRouters.post("/",sessionsController.create)

export {sessionsRouters}