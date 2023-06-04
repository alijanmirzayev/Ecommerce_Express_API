import mongoose from "mongoose"

export const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_CONNECTION_URI)
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}