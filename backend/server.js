import express from 'express'
import jwt from 'jsonwebtoken';
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from "./config/db.js"
import productRouter from './routes/productRoute.js'
import userRouter from "./routes/userRoute.js";

const port = 4000;
const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/product', productRouter)
app.use('/api/user', userRouter)
app.use('/images', express.static('uploads/images'))

app.get('/', (req,res) => {
    res.send("App is Running")
})

app.listen(port, (error) => {
    if(!error){
        console.log("Server Running on Port " + process.env.port)
    }else{
        console.log("Error: " + error)
    }
})