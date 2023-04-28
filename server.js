import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/conn.js'
import mongoose from 'mongoose';

import cors from 'cors'
import route from './route/authRoute.js'
import errorMiddleware from './Middleware/errorMiddleware.js';
import jobroute from './route/jobroute.js';
const app=express()

dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use('/api',route)
app.use(errorMiddleware)
app.use('/api',jobroute)

//mongodb connection
connectDB()



const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})