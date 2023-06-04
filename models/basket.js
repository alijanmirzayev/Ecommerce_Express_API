import { Schema } from "mongoose";

const basketSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecommerce-product',
        required: true
    }
})

export const basketModel = model('ecommerce-basket', basketSchema)