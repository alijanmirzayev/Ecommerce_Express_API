import express from 'express'
import env from 'dotenv/config'
import { dbConnect } from './config/dbConnect.js'
import categoryRouter from './routes/category.js'
import productRouter from './routes/product.js'
import userRouter from './routes/user.js'
import basketRouter from './routes/basket.js'

// Configuration
const app = express()
dbConnect()
app.use(express.json())

// Routers
app.use('/api/category/', categoryRouter)
app.use('/api/product/', productRouter)
app.use('/api/basket/', basketRouter)
app.use('/api/user/', userRouter)

// Server
app.listen(process.env.PORT, () => {
    console.log('Server is running!')
})