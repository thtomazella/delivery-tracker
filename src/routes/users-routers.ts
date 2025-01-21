import { Router } from "express";
import { UsersController } from "@/controllers/users-controller";

const usersRouters = Router()
const usersController = new UsersController()

usersRouters.post("/",usersController.create)


export {usersRouters}