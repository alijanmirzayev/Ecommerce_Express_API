import mongoose, { Schema, model } from "mongoose";

const basketSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecommerce-product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecommerce-user',
        required: true
    },
})

export const basketModel = model('ecommerce-basket', basketSchema)