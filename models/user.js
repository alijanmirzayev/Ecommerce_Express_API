import { Schema, model } from "mongoose";

const addressSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    _id: false
});

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
    },
    address: {
        type: addressSchema,
        required: true
      }
}, {
    versionKey: false
})

export const userModel = model('ecommerce-user', userSchema)