import express from 'express'
import env from 'dotenv/config'
import { dbConnect } from './config/dbConnect.js'

const app = express()
dbConnect()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log('Server is running!')
})