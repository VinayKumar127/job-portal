import Express from "express";
import { createjobController, deletejobController, getAlljobController, updatejobController } from "../controllers/jobController.js";



const jobroute=Express.Router()
//route for creating job
jobroute.post('/createjob',createjobController)

//route for getting all jobs
jobroute.get('/getjobs',getAlljobController)

//route for updating a job
jobroute.patch('/updatejob/:id',updatejobController)

//route for deleting a job
jobroute.delete('/deletejob/:id',deletejobController)
export default jobroute