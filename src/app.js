import express from 'express'
// es importa el acceso al archivo routes 
import  employeesRouter from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

//importar la variable de entorno
import './config.js'
import { PORT } from './config.js'

const app=express()
//MIDLEWARES
app.use(express.json())
// ENDPOINTS 
app.use(indexRoutes)
app.use('/api',employeesRouter)

//manejo de errores cuando la url no es encontrada
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Endpoint not found!"
    })
})
export default app;