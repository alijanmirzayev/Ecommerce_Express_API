import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    versionKey: false
})

export const categoryModel = model('ecommerce-category', categorySchema)