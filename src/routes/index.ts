import { Router } from "express";
import { usersRouters } from "./users-routers";


const routes= Router()

routes.use("/users",usersRouters)

export {routes}