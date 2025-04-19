
import { Router } from 'express';
import { protect } from '../../middleware/auth.js';
import { createTask, getAllTasks, updateTask } from '../../controllers/taskcontroller.js'


const routes=new Router();

routes.post("/create",protect,createTask)
routes.get("/",protect,getAllTasks)
routes.put("/:id",updateTask)

export default routes;

