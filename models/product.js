import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ecommerce-category'
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    colors: {
        type: [{
            type: String,
            enum: ['red', 'blue', 'green', 'black', 'white', 'pink']
        }],
        required: true
    }
}, {
    versionKey: false
})

export const productModel = model('ecommerce-product', productSchema)