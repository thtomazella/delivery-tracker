import { Router } from "express";
import { usersRouters } from "./users-routers";
import { sessionsRouters } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";


const routes= Router()

routes.use("/users",usersRouters)
routes.use("/sessions", sessionsRouters)
routes.use("/deliveries", deliveriesRoutes)

export {routes}