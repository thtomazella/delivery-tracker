import { Router } from "express";
import { usersRouters } from "./users-routers";
import { sessionsRouters } from "./sessions-routes";


const routes= Router()

routes.use("/users",usersRouters)
routes.use("/sessions", sessionsRouters)

export {routes}