import { Router } from "express";
import { 
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee} from "../controllers/employees.controller.js";
// import { pool } from '../src/db.js'
const router=Router()
// routes 
router.post('/employees',createEmployee)
router.get('/employees', getEmployees)
router.get('/employee/:id', getEmployee)
router.delete('/employee/:id',deleteEmployee)
router.patch('/employee/:id',updateEmployee)

export default router;
