import { Router } from 'express';
import authRoutes from './authRoutes.js';
import tasksroute from "./tasks/tasks.routes.js";
const routes = Router();

routes.use('/auth', authRoutes);
routes.use("/tasks",tasksroute)

export default routes;
