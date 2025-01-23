import { Router } from "express";
import { usersRouters } from "./users-routers";
import { sessionsRouters } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";
import { deliveryLogsRoutes } from "./deliverY-logs-routes";


const routes= Router()

routes.use("/users",usersRouters)
routes.use("/sessions", sessionsRouters)
routes.use("/deliveries", deliveriesRoutes)
routes.use("/delivery-logs", deliveryLogsRoutes)


export {routes}